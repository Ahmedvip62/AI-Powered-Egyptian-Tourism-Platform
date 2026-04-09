// Password Visibility Toggle
        const togglePassword = document.getElementById('toggle-password');
        const passwordInput = document.getElementById('password');

        togglePassword.addEventListener('click', function() {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                this.textContent = 'visibility';
            } else {
                passwordInput.type = 'password';
                this.textContent = 'visibility_off';
            }
        });

        // Theme Toggle
        const html = document.documentElement;
        const toggleThemeBtn = document.getElementById('theme-toggle-login');
        const iconDark = document.querySelector('.icon-dark');
        const iconLight = document.querySelector('.icon-light');

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