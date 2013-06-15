define("SuiteView", ['knockout','UnitTestFrameworkManager'], function(ko, utfm) {
    function view() {
        var self = this;
        self.suites = new ko.observableArray([]);
        self.unitTestFrameworkManager = new utfm();
        self.menu = document.getElementById('menu');
        self.view = document.getElementById('view');
        self.totalTests = new ko.observable(0);
        self.totalPassed = new ko.observable(0);
        self.totalFailed = new ko.observable(0);
        self.setMenuHeight = function(){
            self.menu.style.height = document.body.scrollHeight + "px";
        };

        self.add = function(suite){
           suite.num = self.suites().length + 1;
           self.totalTests(self.totalTess() + suite.vm.tests().length);
           self.totalPassed(self.totalPassed() + suite.passedCount);
           self.totalFailed(self.totalFailed() + suite.failedCount);
           self.suites.push(suite);
            suite.vm.benchmarksDone.subscribe(function(newValue) {
                self.setMenuHeight();
            });
        };

        self.show = function(){
           ko.applyBindings(self);
        };

        self.setTheme = function(theme){
            window.ThemeManager.set(theme);
            $('#logo').click();
        };

        self.toggleMenu = function(){
            var menu = document.getElementById('menu');
            if(self.menu.style.display == 'block')
            {
                self.menu.style.display = 'none';
            } else {
                self.setMenuHeight();
                menu.style.display = 'block';
                window.scrollTo(0,0);
            }
        };
    };
    return view;
});
