define('knockoutBenchmarks', function () {
    'use strict';
    function context() {
        var self = this;
        self.KOData = ko.observable("");
        var KOUpdates1 = ko.observable(0);
        var KOUpdates2 = ko.observable(0);
        
        self.KOData.subscribe(function () {
            KOUpdates1(KOUpdates1() + 1);
        });
        self.KOData.subscribe(function () {
            KOUpdates2(KOUpdates2() + 1);
        });
        
        var KOviewmodel = {data: self.KOData, updates1: KOUpdates1, updates2: KOUpdates2, updates3: KOUpdates3, updates4: KOUpdates4, updates5: KOUpdates5, updates6: KOUpdates6, updates7: KOUpdates7, updates8: KOUpdates8, updates9: KOUpdates9, updates10: KOUpdates10};

        self.KOclear = function () {
            self.KOData("");
        };
        self.KOpush = function () {

            self.KOData(self.KOData() + "o");
        };
    }

    return context;
});
