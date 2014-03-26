app.directive('bulleted', function(){
    return {
        restrict: 'A',
        scope:{
            model: '=ngModel',
            maxValue: '@maxValue',
            filledClass: '@filledClass',
            emptyClass: '@emptyClass',
            groupBy: '@groupBy'
        },
        link: function(scope, elem, attrs){

            elem.wrap("<span class='bullet-wrapper'></span>")
            elem.css("display", "none");

            scope.maxValue = scope.maxValue || 6;
            var filledClass = scope.filledClass || 'icon-filled';
            var emptyClass = scope.emptyClass || 'icon-empty';

            var groups = 0;
            if( scope.groupBy ){
                groups = Math.ceil( scope.maxValue / scope.groupBy );
            }

            var divisions = []            
            for( var i = 0; i < groups; i++){
                var div = angular.element('<div class="bullet-group"></div>');
                divisions.push( div );
                elem.parent().append(div);
            }

            var bullets = [];
            for(var i = 0; i < scope.maxValue; i++){
                var bullet = angular.element('<button class="icon"></button>');
                bullet.val(i + 1);

                bullets.push(bullet);

                if(groups){
                    var current = Math.ceil( (i+1) / scope.groupBy ) - 1;
                    divisions[current].append( bullet );
                }
                else{
                    elem.parent().append(bullet);
                }
            }

            for( var i = 0; i < bullets.length; i++){
                bullets[i].bind('click', function(evt){
                    scope.$apply(function(){
                        var value = evt.target.value;
                        if( value == 1 && angular.element(bullets[1]).hasClass(emptyClass) && angular.element(bullets[0]).hasClass(filledClass) ){
                            value = 0;
                        }
                        scope.model = value;
                        displayValue( value );
                    });
                    evt.target.blur();
                });
            }

            displayValue( scope.model );

            function displayValue(value){
                for(var i = 0; i < bullets.length; i++){
                    if( i < value ){
                        bullets[i].removeClass(emptyClass);
                        bullets[i].addClass(filledClass);
                    }
                    else{
                        bullets[i].removeClass(filledClass);
                        bullets[i].addClass(emptyClass);   
                    }
                }
            }

        }
    }
})