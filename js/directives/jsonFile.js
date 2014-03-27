app.directive('jsonFile', function(){
    return {
        restrict: 'A',
        scope: {
            data: '=jsonFile',
            callback: '=whenLoad'
        },
        link: function(scope, elem, attrs){
            elem.bind("change", function(evt){
                var files = evt.target.files;

                for(var i = 0; i < files.length; i++){
                    if( files[i] ){
                        var reader = new FileReader();
                        reader.onload = function(e){
                            scope.$apply(function(){
                                var data = JSON.parse(e.target.result);
                                if( scope.data ){
                                    scope.data = data;
                                }
                                if( scope.callback ){
                                    scope.callback(data);
                                }
                            });
                            elem.val('');
                        }
                        reader.readAsText( files[i] );
                    }
                }                
            })
        }
    }
})