if (Meteor.isClient) {    
    
    Template.scripts.rendered = function() {
        var main = document.createElement('script');
        main.type = 'text/javascript';  
        main.src = '//cdnjs.cloudflare.com/ajax/libs/require.js/2.1.5/require.min.js';
        main.setAttribute('data-main','//raw.github.com/adamjmoon/itchcork/master/main.js');
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(main, s);
    };

    Template.ga.rendered = function () {
        if (!(window._gaq != null)) {
            window._gaq = [];
            _gaq.push(['_setAccount', 'UA-40741651-1']);
            _gaq.push(['_trackPageview']);
            return (function () {
                var ga, gajs, s;
                ga = document.createElement('script');
                ga.type = 'text/javascript';
                ga.async = true;
                gajs = '.google-analytics.com/ga.js';
                ga.src = 'https:' === document.location.protocol ? 'https://ssl' + gajs : 'http://www' + gajs;
                s = document.getElementsByTagName('script')[0];
                return s.parentNode.insertBefore(ga, s);
            })();
        }
    };
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
