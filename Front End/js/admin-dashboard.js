// Sidebar Toggle
        const btnMenu = document.getElementById('menu-btn');
        const btnClose = document.getElementById('close-btn');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        function toggleSidebar() {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('show');
        }

        btnMenu.addEventListener('click', toggleSidebar);
        btnClose.addEventListener('click', toggleSidebar);
        overlay.addEventListener('click', toggleSidebar);

        // Theme Toggle
        const html = document.documentElement;
        const toggleThemeBtn = document.getElementById('theme-toggle');
        const iconDark = document.querySelector('.icon-dark');
        const iconLight = document.querySelector('.icon-light');

        // Initial setup based on OS preference or localStorage
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            html.classList.add('dark');
            iconDark.style.display = 'none';
            iconLight.style.display = 'block';
        }

        toggleThemeBtn.addEventListener('click', () => {
            html.classList.toggle('dark');
            const isDark = html.classList.contains('dark');
            
            if (isDark) {
                localStorage.setItem('theme', 'dark');
                iconDark.style.display = 'none';
                iconLight.style.display = 'block';
            } else {
                localStorage.setItem('theme', 'light');
                iconDark.style.display = 'block';
                iconLight.style.display = 'none';
            }
        });