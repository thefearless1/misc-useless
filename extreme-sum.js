var xtra;
var c;

function strLast(str){//Get last character from string
    return str.charAt(str.length-1); 
}

function parser(str){//Parse string digit to int
    var cifre = ['0','1','2','3','4','5','6','7','8','9'];
    for(var i=0;i<10;i++){
        if(str===cifre[i]){
            return i;
        }
    }
     return 0;
}

function generateResult(nr){//Sum of digits and xtra (: !!!!
    c = (nr + xtra)%10 + c;
    xtra = Math.floor((nr + xtra)/10); 
}

function engine()//All the magic happens here :P
{
    var a='88888888888888888888888888';
    var b='9998888888888888888888888888888888888';
    c='';
    xtra=0;
    
    while (a!=="" || b!==""){
        generateResult(parser(strLast(a))+parser(strLast(b)));
        if(a!==""){a = a.substring(0, a.length - 1);}
        if(b!==""){b = b.substring(0, b.length - 1);}
    }
    
    if (xtra!=0){c=xtra+c;}
    
    console.log(c);
    c='';
    xtra=0;
}
