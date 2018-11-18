function attr(name : string) : String;
function attr(age : number) : number;
function attr(nameorage :any) :any{
    if(nameorage && typeof nameorage == "string"){
        console.log('name=' + nameorage);
    }else{
        console.log('age=' + nameorage);
    }

}
attr('Tom');
attr(30);
