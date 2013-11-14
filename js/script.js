function AlcoholCalc($scope) {
    //$scope.originalGravity = parseFloat('1.040');
    //$scope.finalGravity = parseFloat('1.009');
//
    $scope.result = function() {
        var og = parseFloat($scope.originalGravity);
        var fg = parseFloat($scope.finalGravity);

//        $scope.feedback = isNumeric(og);

/*        if (!isNumeric(og) || !isNumeric(fg)) {
            return 0;
        }*/
        return (og - fg) / 0.00753;
    };


    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
}