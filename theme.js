// Shared theme toggle + toast notifications (loaded in <head> on every page).
(function () {
    document.documentElement.classList.add('js');
    const KEY = 'sh-mobile-theme';

    function getSaved() {
        try { return localStorage.getItem(KEY); } catch (e) { return null; }
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
            btn.innerHTML = theme === 'light'
                ? '<i class="fa-solid fa-moon text-lg"></i>'
                : '<i class="fa-solid fa-sun text-lg"></i>';
        }
    }

    // Apply immediately (script is in <head>) so there is no flash of the wrong theme.
    const initial = getSaved() ||
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', initial);

    window.toggleTheme = function () {
        const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        try { localStorage.setItem(KEY, next); } catch (e) { /* storage unavailable */ }
        applyTheme(next);
    };

    // ---- Toasts ----
    const ICONS = { success: 'fa-circle-check', error: 'fa-circle-exclamation', info: 'fa-circle-info' };

    window.showToast = function (message, type, action) {
        type = ICONS[type] ? type : 'info';
        let stack = document.getElementById('toast-stack');
        if (!stack) {
            stack = document.createElement('div');
            stack.id = 'toast-stack';
            stack.setAttribute('role', 'status');
            stack.setAttribute('aria-live', 'polite');
            document.body.appendChild(stack);
        }
        const toast = document.createElement('div');
        toast.className = 'toast toast-' + type;

        const icon = document.createElement('i');
        icon.className = 'fa-solid ' + ICONS[type];
        const text = document.createElement('span');
        text.textContent = message;
        toast.append(icon, text);

        if (action && action.label && typeof action.onClick === 'function') {
            const a = document.createElement('button');
            a.className = 'toast-action';
            a.textContent = action.label;
            a.onclick = () => { action.onClick(); dismiss(); };
            toast.appendChild(a);
        }
        const close = document.createElement('button');
        close.className = 'toast-close';
        close.setAttribute('aria-label', 'Dismiss');
        close.innerHTML = '&times;';
        close.onclick = () => dismiss();
        toast.appendChild(close);

        stack.appendChild(toast);
        while (stack.children.length > 3) stack.firstChild.remove();
        requestAnimationFrame(() => toast.classList.add('show'));

        let timer = setTimeout(dismiss, 3500);
        function dismiss() {
            clearTimeout(timer);
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 250);
        }
        toast.addEventListener('mouseenter', () => clearTimeout(timer));
        toast.addEventListener('mouseleave', () => { timer = setTimeout(dismiss, 1500); });
    };

    // ---- Scroll reveal: elements with class "reveal" fade/slide in when scrolled into view ----
    function initReveal() {
        const els = Array.from(document.querySelectorAll('.reveal'));
        if (!els.length) return;
        const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce || !('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('in')); return; }

        // Stagger siblings: delay grows with position among .reveal siblings (capped).
        const seen = new Map();
        els.forEach(el => {
            const n = seen.get(el.parentNode) || 0;
            seen.set(el.parentNode, n + 1);
            el.style.setProperty('--rd', Math.min(n, 5) * 90 + 'ms');
        });

        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                io.unobserve(el);
                el.classList.add('in');
                // Drop reveal styles afterwards so the element's own hover/transition rules apply again.
                setTimeout(() => { el.classList.remove('reveal', 'in'); el.style.removeProperty('--rd'); }, 1400);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        els.forEach(el => io.observe(el));
    }

    document.addEventListener('DOMContentLoaded', initReveal);

    document.addEventListener('DOMContentLoaded', function () {
        const bar = document.querySelector('header .h-20');
        if (bar && bar.lastElementChild && !document.getElementById('theme-toggle')) {
            const btn = document.createElement('button');
            btn.id = 'theme-toggle';
            btn.type = 'button';
            btn.className = 'p-2.5 bg-slate-800/80 hover:bg-slate-700 text-slate-200 rounded-full border border-slate-700 transition w-11 h-11 flex items-center justify-center';
            btn.onclick = window.toggleTheme;
            bar.lastElementChild.prepend(btn);
        }
        applyTheme(document.documentElement.getAttribute('data-theme'));
    });
})();

// Developer credit card: on touch screens the first tap opens the card instead of leaving the page.
document.addEventListener('click', function (e) {
    const pop = document.querySelector('.dev-pop');
    if (!pop) return;
    if (e.target.closest('.dev-name') && window.matchMedia('(hover: none)').matches && !pop.classList.contains('open')) {
        e.preventDefault();
        pop.classList.add('open');
    } else if (!e.target.closest('.dev-pop')) {
        pop.classList.remove('open');
    }
});
