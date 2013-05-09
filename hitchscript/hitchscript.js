if (Meteor.isClient) {

    Template.hitchscript.created = function () {

        var testcase = '';
        if (window.location.pathname && window.location.pathname.length>1)
            testcase = window.location.pathname.split('/')[1];
        else if (window.location.hash)
            testcase = window.location.hash.split('#')[1];
        else
            testcase = 'datetime';

        requirejs.config({
            baseUrl: 'https://',
            paths: {
                'ItchCork': 'raw.github.com/adamjmoon/itchcork/master/itchcork.min',
                'ThemeManager': 'raw.github.com/adamjmoon/itchcork/master/itchcork.min',
                'js2coffee': 'raw.github.com/adamjmoon/itchcork/master/vendor/js2coffee.min',
                'coffee-script': 'raw.github.com/adamjmoon/itchcork/master/vendor/coffeescript.min',
                'lodash': 'cdnjs.cloudflare.com/ajax/libs/lodash.js/1.2.0/lodash.min',
                'platform': 'cdnjs.cloudflare.com/ajax/libs/platform/0.4.0/platform.min',
                'benchmark': 'raw.github.com/bestiejs/benchmark.js/master/benchmark',
                'knockout': 'ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1',
                'context': 'raw.github.com/adamjmoon/itchcork/master/context/' + testcase,
                'test': 'raw.github.com/adamjmoon/itchcork/master/test/' + testcase
            }
        });

        define('js2coffee', ['raw.github.com/adamjmoon/itchcork/master/vendor/coffeescript.min','raw.github.com/adamjmoon/itchcork/master/vendor/js2coffee.min'], function () { return this.Js2Coffee; });
        require(['test', 'ItchCork', 'knockout', 'platform', 'lodash', 'benchmark'], function (test, ic) {
            var runSpecs = new test(new ic());
        });
    };

    Template.ga.rendered = function() {
      if (!(window._gaq != null)) {
        window._gaq = [];
        _gaq.push(['_setAccount', 'UA-40741651-1']);
        _gaq.push(['_trackPageview']);
        return (function() {
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
