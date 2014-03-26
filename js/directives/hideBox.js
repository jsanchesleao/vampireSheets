app.directive('hideBox', function(){
    return {
        restrict: 'A',
        scope:{
            model: '=ngModel',
            emptyText: '@whenEmpty'
        },
        link: function(scope, elem, attrs){

            var placeholder = scope.emptyText || '...';

            function convertToText(value){
                if( !value ) return placeholder;
                return value;
            }

            function convertFromText(value){
                if( value == placeholder ) return '';
                return value;
            }

            elem.wrap('<span class="text-input"></span>');

            var text = angular.element('<span></span>');
            text.html( convertToText(scope.model) );
            elem.parent().append(text);

            text.css("display", "block");
            elem.css("display", "none");

            elem.bind("blur", function(){
                text.html( convertToText(elem.val() ) );
                text.css("display", "block");
                elem.css("display", "none");
            });

            text.bind("click", function(){
                elem.val( convertFromText(text.html()) );
                text.css("display", "none");
                elem.css("display", "inline-block");
                elem[0].focus();
            });

        }
    }
})