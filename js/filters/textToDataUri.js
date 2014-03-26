app.filter('toDataUri', function(){
    return function(input){
        return 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(input));
    }
});