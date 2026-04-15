const html = document.documentElement;
        const toggleBtns = [document.getElementById('theme-toggle-desktop'), document.getElementById('theme-toggle-mobile')];
        
        function updateIcons(isDark) {
            toggleBtns.forEach(btn => {
                if(!btn) return;
                const darkIcon = btn.querySelector('.icon-dark');
                const lightIcon = btn.querySelector('.icon-light');
                if(isDark) {
                    darkIcon.style.display = 'none';
                    lightIcon.style.display = 'block';
                } else {
                    darkIcon.style.display = 'block';
                    lightIcon.style.display = 'none';
                }
            });
        }

        function toggleTheme() {
            html.classList.toggle('dark');
            const isDark = html.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateIcons(isDark);
        }

        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            html.classList.add('dark');
            updateIcons(true);
        }

        toggleBtns.forEach(btn => btn?.addEventListener('click', toggleTheme));