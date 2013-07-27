define("SuiteView", ['UnitTestFrameworkManager'], function (utfm) {
    function view() {
        window.ThemeManager['currentTheme'] = ko.observable(amplify.store('currentTheme'));
        var self = this;
        self.suites = new ko.observableArray([]);
        self.nice;
        self.unitTestFrameworkManager = new utfm();
        self.unitTestFrameworkManager.init();
        self.menu = document.getElementById('menu');
        self.view = document.getElementById('view');
        self.totalTests = new ko.observable(0);
        self.totalPassed = new ko.observable(0);
        self.totalFailed = new ko.observable(0);
        self.githubAccount = new ko.observable('adamjmoon');
        self.githubRepo = new ko.observable('itchcork');
        self.githubBranch = new ko.observable('master');
        self.contextRoot = new ko.observable('raw.github.com/' +  self.githubAccount() + '/' + self.githubRepo() + '/' + self.githubBranch() + '/');
        self.vendorRoot = new ko.observable(self.contextRoot() + 'vendor/');
        self.setMenuHeight = function () {
            self.menu.style.height = document.body.scrollHeight - 45 + "px";
        };

        self.add = function (suite) {
            suite.vm.num = self.suites().length + 1;
            self.totalTests(self.totalTests() + suite.vm.tests().length);
            self.totalPassed(self.totalPassed() + suite.passedCount);
            self.totalFailed(self.totalFailed() + suite.failedCount);
            self.suites.push(suite.vm);
            self.show();
            suite.vm.benchmarksDone.subscribe(function (newValue) {
                self.setMenuHeight();
            });

        };

        self.show = function () {
            ko.applyBindings(self, document.getElementById('frame'));
            self.setupNiceScroll();
            require([self.vendorRoot() + 'jscolor'], function(){
                jscolor.init();
            });

        };

        self.setTheme = function (theme) {
            window.ThemeManager.set(theme);
            window.ThemeManager['currentTheme'](theme);
            if(theme!=='customTheme')
                $('#logo').click();
        };

        self.toggleMenu = function () {
            var menu = document.getElementById('menu');
            if (self.menu.style.display == 'block') {
                self.menu.style.display = 'none';
            } else {
                self.setMenuHeight();
                menu.style.display = 'block';
                window.scrollTo(0, 0);
            }
        };
        self.setupNiceScroll = function () {

            self.nice = $("html").niceScroll();

            self.view.onresize=function(){
                self.nice.resize();
            };
        };
        self.scrollToSelector = function (selector) {
            window.scrollTo(0, $(selector).position().top);
        };

        self.collapseAll = function () {
            if ($("#rightCorkCollapse").hasClass('expandAll')) {
                $('div.collapsed').click();
                $("#rightCorkCollapse").removeClass('expandAll').addClass('collapseAll');
            } else {
                $('div.in').siblings().children('.collapseToggle').click();
                $("#rightCorkCollapse").removeClass('collapseAll').addClass('expandAll');
            }
        };
    };
    return view;
});
