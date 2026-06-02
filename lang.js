(function () {
    var KEY = 'preferred-lang';

    function getLang() {
        return localStorage.getItem(KEY) || 'en';
    }

    function applyLang(lang) {
        document.documentElement.setAttribute('lang', lang);
        localStorage.setItem(KEY, lang);
        var btn = document.getElementById('langToggle');
        if (btn) btn.textContent = lang === 'en' ? 'PT' : 'EN';
    }

    document.addEventListener('DOMContentLoaded', function () {
        applyLang(getLang());
        var btn = document.getElementById('langToggle');
        if (btn) {
            btn.addEventListener('click', function () {
                var current = document.documentElement.getAttribute('lang') || 'en';
                applyLang(current === 'en' ? 'pt' : 'en');
            });
        }
    });
})();
