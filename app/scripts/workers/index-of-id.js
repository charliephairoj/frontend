self.addEventListener('message', function(e){
    var haystack = e.data.haystack;
    var needle = e.data.needle;
    if(needle.hasOwnProperty('id')){
        for(var i in haystack){
            if(haystack[i].hasOwnProperty('id')){
                if(haystack[i].id == needle.id){
                    self.postMessage(i);
                    return;
                }
            }
        }
        self.postMessage(-1);
    }else{
        self.postMessage(-1);
    }
    
});
