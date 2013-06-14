define("SuiteView", ['knockout'], function(ko) {
    function view() {
        var self = this;
        self.suites = new ko.observableArray([]);
        self.menu = document.getElementById('menu');
        self.view = document.getElementById('view');
        self.setMenuHeight = function(){
            self.menu.style.height = document.body.scrollHeight + "px";
        };
        ko.applyBindings(self);


        self.add = function(suite){
           self.suites.push(suite);
            suite.vm.benchmarksDone.subscribe(function(newValue) {
                self.setMenuHeight();
            });
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
