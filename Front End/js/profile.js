const html = document.documentElement;
        const toggleDesktop = document.getElementById('theme-toggle-desktop');
        const toggleMobile = document.getElementById('theme-toggle-mobile');

        function toggleTheme() {
            html.classList.toggle('dark');
            const isDark = html.classList.contains('dark');
            const icon = isDark ? 'light_mode' : 'dark_mode';
            
            if(toggleDesktop) toggleDesktop.innerHTML = `<span class="material-symbols-rounded">${icon}</span>`;
            if(toggleMobile) toggleMobile.innerHTML = `<span class="material-symbols-rounded" style="color: var(--text-muted)">${icon}</span>`;
            
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }

        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            html.classList.add('dark');
            const icon = 'light_mode';
            if(toggleDesktop) toggleDesktop.innerHTML = `<span class="material-symbols-rounded">${icon}</span>`;
            if(toggleMobile) toggleMobile.innerHTML = `<span class="material-symbols-rounded" style="color: var(--text-muted)">${icon}</span>`;
        }

        if(toggleDesktop) toggleDesktop.addEventListener('click', toggleTheme);
        if(toggleMobile) toggleMobile.addEventListener('click', toggleTheme);