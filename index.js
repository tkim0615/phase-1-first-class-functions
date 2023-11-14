function receivesAFunction (callback){
    callback()
}



//2

function returnsANamedFunction(){
function add(){
    return 1 + 2
}
return add
}

//3
function returnsAnAnonymousFunction(){
    return function (){
        
    }
}