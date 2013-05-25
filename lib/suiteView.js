define("SuiteView", ['knockout'], function(ko) {

    var view =  function() {
        var self = this;
        self.suites = new ko.observableArray([]);
        self.menu = document.getElementById('menu');
        self.menu.style.height = (window.innerHeight - 50) + "px";

        ko.applyBindings(self);

        self.add = function(suite){
           self.suites.push(suite);
        }

        self.setTheme = function(theme){
            window.ThemeManager.set(theme);
            $('#logo').click();
        }

        self.toggleMenu = function(){
            var menu = document.getElementById('menu');
            if(self.menu.style.display == 'block')
            {
                self.menu.style.display = 'none';
            } else {
                menu.style.display = 'block';
                window.scrollTo(0,0);
            }
        }
    };
    return view;
});
