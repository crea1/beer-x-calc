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


$(window).load(function() {
    var aspectRatio      = $("#bg").width() / $("#bg").height();
    function resizeBg() {
        if ( ($(window).width() / $(window).height()) < aspectRatio ) {
            $("#bg")
                .removeClass()
                .addClass('bgheight');
        } else {
            $("#bg")
                .removeClass()
                .addClass('bgwidth');
        }
    }

    $(window).resize(resizeBg).trigger("resize");
});