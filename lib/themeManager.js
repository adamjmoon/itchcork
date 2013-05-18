define("ThemeManager", [], function () {
    return function ThemeManager() {

        ThemeManager.prototype.init = function () {
            if (!amplify.store('currentTheme')) {
                amplify.store('previousTheme', '');
                this.set('cyborg');
            }
        }

        function apply() {
            var currentThemeStyle = document.getElementById(amplify.store('currentTheme'));
            currentThemeStyle.innerHTML = currentThemeStyle.innerHTML.replace(/\/\*/g, "").replace(/\*\//g, "");
            if (amplify.store('previousTheme') != '') {
                var previousThemeStyle = document.getElementById(amplify.store('previousTheme'));
                previousThemeStyle.innerHTML = '/*' + previousThemeStyle.innerHTML + '*/';
            }
        }

        ThemeManager.prototype.set = function (newTheme) {
            if (newTheme != amplify.store('currentTheme')) {
                amplify.store('previousTheme', amplify.store('currentTheme'));
                amplify.store('currentTheme', newTheme);
                apply();
            }
        };
    };
});