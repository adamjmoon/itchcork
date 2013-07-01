define('knockoutVSangular', function () {
    'use strict';
    function context() {
        var self = this;
        window.Ctrl = function ($scope) {
            $scope.data = "";
            $scope.numberofChanges1 = 0;
            $scope.numberofChanges2 = 0;
            $scope.numberofChanges3 = 0;
            $scope.numberofChanges4 = 0;
            $scope.numberofChanges5 = 0;
            $scope.numberofChanges6 = 0;
            $scope.numberofChanges7 = 0;
            $scope.numberofChanges8 = 0;
            $scope.numberofChanges9 = 0;
            $scope.numberofChanges10 = 0;
            $scope.$watch('data', function (a, b, c) {
                $scope.numberofChanges1++;
            });
            $scope.$watch('data', function (a, b, c) {
                $scope.numberofChanges2++;
            });
            $scope.$watch('data', function (a, b, c) {
                $scope.numberofChanges3++;
            });
            $scope.$watch('data', function (a, b, c) {
                $scope.numberofChanges4++;
            });
            $scope.$watch('data', function (a, b, c) {
                $scope.numberofChanges5++;
            });
            $scope.$watch('data', function (a, b, c) {
                $scope.numberofChanges6++;
            });
            $scope.$watch('data', function (a, b, c) {
                $scope.numberofChanges7++;
            });
            $scope.$watch('data', function (a, b, c) {
                $scope.numberofChanges8++;
            });
            $scope.$watch('data', function (a, b, c) {
                $scope.numberofChanges9++;
            });
            $scope.$watch('data', function (a, b, c) {
                $scope.numberofChanges10++;
            });
        }


        self.ang_scope = $('#angList').scope();

        self.ANGclear = function () {
            self.ang_scope.data = "OMGOMGOMG";
        };
        self.ANGpush = function () {
            self.ang_scope.data += "OMGOMGOMG";
            self.ang_scope.$apply();
        };

        self.KOData = ko.observable("");
        var KOUpdates1 = ko.observable(0);
        var KOUpdates2 = ko.observable(0);
        var KOUpdates3 = ko.observable(0);
        var KOUpdates4 = ko.observable(0);
        var KOUpdates5 = ko.observable(0);
        var KOUpdates6 = ko.observable(0);
        var KOUpdates7 = ko.observable(0);
        var KOUpdates8 = ko.observable(0);
        var KOUpdates9 = ko.observable(0);
        var KOUpdates10 = ko.observable(0);
        self.KOData.subscribe(function () {
            KOUpdates1(KOUpdates1() + 1);
        });
        self.KOData.subscribe(function () {
            KOUpdates2(KOUpdates2() + 1);
        });
        self.KOData.subscribe(function () {
            KOUpdates3(KOUpdates3() + 1);
        });
        self.KOData.subscribe(function () {
            KOUpdates4(KOUpdates4() + 1);
        });
        self.KOData.subscribe(function () {
            KOUpdates5(KOUpdates5() + 1);
        });
        self.KOData.subscribe(function () {
            KOUpdates6(KOUpdates6() + 1);
        });
        self.KOData.subscribe(function () {
            KOUpdates7(KOUpdates7() + 1);
        });
        self.KOData.subscribe(function () {
            KOUpdates8(KOUpdates8() + 1);
        });
        self.KOData.subscribe(function () {
            KOUpdates9(KOUpdates9() + 1);
        });
        self.KOData.subscribe(function () {
            KOUpdates10(KOUpdates10() + 1);
        });
        var KOviewmodel = {data: self.KOData, updates1: KOUpdates1, updates2: KOUpdates2, updates3: KOUpdates3, updates4: KOUpdates4, updates5: KOUpdates5, updates6: KOUpdates6, updates7: KOUpdates7, updates8: KOUpdates8, updates9: KOUpdates9, updates10: KOUpdates10};

        ko.applyBindings(KOviewmodel, document.getElementById('koapp'));
        self.KOclear = function () {
            self.KOData("");
        };
        self.KOpush = function () {

            self.KOData(self.KOData() + "OMGOMGOMG");
        };
    }

    return context;
});
