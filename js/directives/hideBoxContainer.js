app.directive('hideBoxContainer', function(){
    return {
        restrict: 'A',
        link: function(scope, elem, attrs){
            elem.bind('click', function(){
                elem.find('input').show().focus();
                elem.find('select').show().focus();
                elem.find('.text-input-placeholder').hide();
            })
        }
    }
})