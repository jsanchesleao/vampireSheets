app.directive('transparentSelect', function(){
    return {
        restrict: 'A',
        link: function(scope, elem, attrs){
            elem.wrap('<div class="transparent-input"></div>');
        }
    }
})