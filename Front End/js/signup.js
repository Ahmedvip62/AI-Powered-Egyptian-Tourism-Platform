// Password visibility toggle
        document.querySelectorAll('.password-toggle').forEach(btn => {
            btn.addEventListener('click', function() {
                let input = this.closest('.input-wrapper').querySelector('input');
                if (input.type === 'password') {
                    input.type = 'text';
                    this.textContent = 'visibility';
                } else {
                    input.type = 'password';
                    this.textContent = 'visibility_off';
                }
            });
        });

        // Password strength checker
        const passwordInput = document.getElementById('password');
        const confirmInput = document.getElementById('confirm-password');
        const bars = [document.getElementById('bar1'), document.getElementById('bar2'), document.getElementById('bar3'), document.getElementById('bar4')];
        const strengthText = document.getElementById('strength-text');
        const matchMsg = document.getElementById('match-message');
        const mismatchMsg = document.getElementById('mismatch-message');

        function checkStrength(password) {
            let score = 0;
            if (!password) return 0;
            if (password.length >= 8) score++;
            if (password.match(/[a-z]/)) score++;
            if (password.match(/[A-Z]/)) score++;
            if (password.match(/[0-9]/)) score++;
            if (password.match(/[^a-zA-Z0-9]/)) score++;
            return Math.min(score, 4);
        }

        function updateStrengthIndicator() {
            const password = passwordInput.value;
            const score = checkStrength(password);
            const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500', 'bg-green-600'];
            const labels = ['Too weak', 'Weak', 'Fair', 'Good', 'Strong'];
            
            for (let i = 0; i < 4; i++) {
                // Reset classes
                bars[i].classList.remove('bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500', 'bg-green-600', 'bg-gray-200', 'dark:bg-gray-700');
                
                if (i < score) {
                    bars[i].classList.add(colors[score-1]);
                } else {
                    bars[i].classList.add('bg-gray-200', 'dark:bg-gray-700');
                }
            }
            strengthText.textContent = score ? labels[score-1] : 'Too weak';
            strengthText.style.color = score ? 'var(--text-main)' : 'var(--text-muted)';
        }

        function checkMatch() {
            const password = passwordInput.value;
            const confirm = confirmInput.value;
            if (confirm === '') {
                matchMsg.classList.add('hidden');
                mismatchMsg.classList.add('hidden');
            } else if (password === confirm) {
                matchMsg.classList.remove('hidden');
                mismatchMsg.classList.add('hidden');
            } else {
                matchMsg.classList.add('hidden');
                mismatchMsg.classList.remove('hidden');
            }
        }

        passwordInput.addEventListener('input', () => {
            updateStrengthIndicator();
            checkMatch();
        });
        confirmInput.addEventListener('input', checkMatch);

        // Theme Switcher
        const html = document.documentElement;
        const toggleThemeBtn = document.getElementById('theme-toggle-signup');
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