define("SuiteView", ['knockout'], function(ko) {

    var view =  function() {
        var self = this;
        var topNavNeight=45;
        self.suites = new ko.observableArray([]);
        self.menu = document.getElementById('menu');
        self.view = document.getElementById('view');
        self.frame = document.getElementById('frame');
        self.setMenuHeight = function(){
            self.menu.style.height = document.body.scrollHeight + "px";
        }
        self.setMenuHeight();
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
                self.setMenuHeight();
                menu.style.display = 'block';
                window.scrollTo(0,0);
            }
        }


    };
    return view;
});
