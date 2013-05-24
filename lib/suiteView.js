define("SuiteView", ['knockout'], function(ko) {

    var view =  function() {
        var self = this;
        self.suites = new ko.observableArray([]);


        self.add = function(suite){
           self.suites.push(suite);
           if(self.suites().length == 1){
               ko.applyBindings(self);
           }
        }

        self.setTheme = function(theme){
            window.ThemeManager.set(theme);
        }
    };
    return view;
});
