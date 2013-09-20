define("SuiteView", ['UnitTestFrameworkManager'], function (utfm) {
    function view() {

        var self = this;

        self.unitTestFrameworkManager = new utfm();
        self.unitTestFrameworkManager.init();
        self.menu = document.getElementById('menu');
        self.view = document.getElementById('view');
        self.suites = new ko.observableArray([]);
        self.totalTests = new ko.observable(0);
        self.totalPassed = new ko.observable(0);
        self.totalFailed = new ko.observable(0);
        self.githubAccount = new ko.observable('adamjmoon');
        self.githubRepo = new ko.observable('itchcork');
        self.githubBranch = new ko.observable('master');
        self.contextRoot = new ko.observable('raw.github.com/' + self.githubAccount() + '/' + self.githubRepo() + '/' + self.githubBranch() + '/');
        self.vendorRoot = new ko.observable(self.contextRoot() + 'vendor/');
        self.currentTheme = ko.observable(amplify.store('currentTheme'));
        self.currentView = ko.observable('');
        var customTheme = amplify.store('customTheme');
        self.cto = {};
        for (var prop in customTheme) {
            self.cto[prop] = ko.observable(customTheme[prop]);
        }
        for (var prop in self.cto) {
            self.cto[prop].subscribe(new Function('newValue', "window.ThemeManager.updateCustom('" + prop + "',newValue);")

            );
        }

        self.reset = function () {
            "use strict";
            self.suites([]);
            self.totalTests(0);
            self.totalPassed(0);
            self.totalFailed(0);
        }


        self.setMenuHeight = function () {

            if (self.view.scrollHeight > window.innerHeight) {
                if (self.view.scrollHeight > self.menu.scrollHeight) {
                    self.menu.style.height = self.view.scrollHeight - 45 + 'px';
                }
            }
            else {
                self.menu.style.height = window.innerHeight - 45 + 'px';
            }

        };

        self.add = function (suite) {

            suite.vm.num = self.suites().length + 1;
            self.suites.push(suite.vm);
            if (self.suites().length === 1 && self.unitTestFrameworkManager.getFramework() === 'itchcork') {
                self.bindView();
            }

            suite.vm.benchmarksDone.subscribe(function (newValue) {
                self.setMenuHeight();
            });

        };

        self.incrementPassedCount = function () {
            self.totalTests(self.totalTests() + 1);
            self.totalPassed(self.totalPassed() + 1);
        };

        self.incrementFailedCount = function () {
            self.totalTests(self.totalTests() + 1);
            self.totalFailed(self.totalFailed() + 1);
        };

        self.bindView = function () {

            ko.applyBindings(self, document.getElementById('frame'));
            self.setMenuHeight();
            require([self.vendorRoot() + 'jscolor'], function () {
                jscolor.init();
            });
            self.setupNiceScroll();

        };


        self.setTheme = function (theme) {
            window.ThemeManager.set(theme);
            self.currentTheme(theme);
        };

        self.toggleMenu = function () {
            var menu = document.getElementById('menu');
            if (menu.style.display != 'none') {
                menu.style.display = 'none';
            } else {
                menu.style.display = 'block';
            }
        };


        self.setupNiceScroll = function () {
            window.scrollTo(0, 0);
            $("html").niceScroll();
            $("#view").niceScroll();
            self.view.onresize = function () {
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
