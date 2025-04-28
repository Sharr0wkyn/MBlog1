document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemDarkMode)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    const themeToggles = [
        document.getElementById('theme-toggle'),
        document.getElementById('theme-toggle-mobile')
    ].filter(Boolean);

    themeToggles.forEach(toggle => {
        if (toggle) {
            toggle.removeEventListener('click', toggleTheme);
            toggle.addEventListener('click', toggleTheme);
        }
    });
});


function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    if (typeof window.initFlowbite === 'function') {
        try {
            window.initFlowbite();
        } catch (error) {
            console.warn('Ошибка при инициализации Flowbite:', error);
        }
    }
}