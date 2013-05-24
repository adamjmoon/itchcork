define("SuiteView", ['knockout'], function(ko) {

    var view =  function() {
        var self = this;
        self.suites = new ko.observableArray([]);
        ko.applyBindings(self);

        self.add = function(suite){
           self.suites.push(suite);
        }

        self.setTheme = function(theme){
            window.ThemeManager.set(theme);
            $('#logo').click();
        }
    };
    return view;
});
