window.ThemeManager = (function () {
    "use strict";
    var themeManager = {};

    var apply = function() {
        var currentThemeStyle = document.getElementById(amplify.store('currentTheme'));
        currentThemeStyle.innerHTML = currentThemeStyle.innerHTML.replace(/\/\*/g, "").replace(/\*\//g, "");
        if (amplify.store('previousTheme') != '') {
            var previousThemeStyle = document.getElementById(amplify.store('previousTheme'));
            previousThemeStyle.innerHTML = '/*' + previousThemeStyle.innerHTML + '*/';
        }
    };

    themeManager.set = function (newTheme) {
        if (newTheme != amplify.store('currentTheme')) {
            amplify.store('previousTheme', amplify.store('currentTheme'));
            amplify.store('currentTheme', newTheme);
            apply();
        }
    };

    if (!amplify.store('currentTheme')) {
        amplify.store('previousTheme', '');
        this.set('cyborg');
    } else {
        apply();
    }

    return themeManager;
}());