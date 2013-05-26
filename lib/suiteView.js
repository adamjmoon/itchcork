define("SuiteView", ['knockout'], function(ko) {

    var view =  function() {
        var self = this;
        var topNavNeight=45;
        self.suites = new ko.observableArray([]);
        self.bodyHeight = ko.observable(document.body.scrollHeight);
        self.menu = document.getElementById('menu');
        self.view = document.getElementById('view');
        self.frame = document.getElementById('frame');
        self.menu.style.height = (window.innerHeight - topNavNeight) + "px";
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

        self.setMenuHeight = function(){
            self.menu.style.height = document.body.scrollHeight-topNavNeight + "px";
        };

        self.bodyHeight.subscribe(function(){
            self.setMenuHeight();
        });
    };
    return view;
});
