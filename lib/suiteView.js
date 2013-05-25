define("SuiteView", ['knockout'], function(ko) {

    var view =  function() {
        var self = this;
        self.suites = new ko.observableArray([]);
        self.menu = document.getElementById('menu');

        ko.applyBindings(self);

        self.add = function(suite){
           self.suites.push(suite);
        }

        self.setTheme = function(theme){
            window.ThemeManager.set(theme);
            $('#logo').click();
            self.menu.setAttribute('height',  (window.innerHeight - 44) + 'px');
        }
    };
    return view;
});
