function AlcoholCalc($scope) {

    $scope.result = function() {
        var og = parseFloat($scope.originalGravity);
        var fg = parseFloat($scope.finalGravity);

        if (og > 1000 && fg > 1000) {
            fg = fg / 1000;
            og = og / 1000;
        }

        return (og - fg) / 0.00753;

    };
}
