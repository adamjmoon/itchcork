define("UnitTestFrameworkManager", [], function () {
    return function UnitTestFrameworkManager() {
        UnitTestFrameworkManager.prototype.init = function () {
            apply();
        }

        function apply() {
            var currentThemeStyle = document.getElementById(amplify.store('currentTheme'));
            currentThemeStyle.innerHTML = currentThemeStyle.innerHTML.replace(/\/\*/g, "").replace(/\*\//g, "");
            if (amplify.store('previousTheme') != '') {
                var previousThemeStyle = document.getElementById(amplify.store('previousTheme'));
                previousThemeStyle.innerHTML = '/*' + previousThemeStyle.innerHTML + '*/';
            }
        }

        UnitTestFrameworkManager.prototype.set = function (framework) {
            if (framework != amplify.store('currentUnitTestFramework')) {
                amplify.store('previousUnitTestFramework', amplify.store('currentTheme'));
                amplify.store('currentTheme', newTheme);
                apply();
            }
        };
    };
});