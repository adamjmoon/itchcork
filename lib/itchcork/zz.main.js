require(['SuiteView', 'itchcork', 'context'], function (sv, itchcork) {

    window.suiteView = new sv();
    var context = '';
    if (window.location.pathname && window.location.pathname.length > 1)
        context = window.location.pathname.split('/')[1];
    else if (window.location.hash && window.location.hash.length > 1)
        context = window.location.hash.split('#')[1];

    var suite = context != '' ? window.suiteView.unitTestFrameworkManager.getFramework() + '/' + context : 'all-' + window.suiteView.unitTestFrameworkManager.getFramework();
    var suiteFilePath = suiteView.contextRoot() + 'examples/test';

    requirejs.config({
        baseUrl: 'https://',
        paths: {
            'context': suiteView.contextRoot() + 'examples/all-context',
            'suite': suiteFilePath + "/" + suite,
            'suitePath': suiteFilePath
        }
    });

    $("#topNav").show();
    $('div.frame').show();


    if (window.suiteView.unitTestFrameworkManager.init() === "itchcork") {
        require(['suite'], function () {

        });
    }

});



