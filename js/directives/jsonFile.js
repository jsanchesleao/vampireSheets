app.directive('jsonFile', function(){
    return {
        restrict: 'A',
        scope: {
            data: '=jsonFile'
        },
        link: function(scope, elem, attrs){
            scope.data = 'unloaded';

            elem.bind("change", function(evt){
                var file = evt.target.files[0];
                if( file ){
                    var reader = new FileReader();
                    reader.onload = function(e){
                        scope.$apply(function(){
                            scope.data = JSON.parse(e.target.result);
                        })
                    }
                    reader.readAsText( file );
                }
            })
        }
    }
})