//frist mathod
for ( var i=5; i>=1; i--){
    for( var j=i; j>=1; j-- ){
        document.write("*")
        document.write(" ")
    }
    document.write("<br>")
}


document.write("<br>")


 //second mathod

for ( var a=1; a<=5; a++){

    for ( var b=1; b<=a; b++ ){
        document.write(a)
        document.write(" ")
    }
    document.write("<br>")
}

document.write("<br>") 


//3rd mathod

for ( var a=1; a<=5; a++){
    for( var b=1; b<=a; b++){
    document.write(b)
    document.write(" ")
    }
document.write("<br>")
}
document.write("<br>")

//4th mathod

var abc =" ";

for ( var a=0 ; a<=4; a++){
    for( var b=0; b<=a; b++){
    abc+= String.fromCharCode(b+65);
    abc +=" ";
    
    }
abc +="<br>"

}

document.write(abc)



// 5th mathod
document.write( "<center>")
for ( var i=1; i<=9; i=i+2){
    for ( var j=1; j<=i; j++){
        document.write("*")
        document.write(" ")
    }
    document.write("<br>")
}

document.write ("</center>")


document.write("<br>")
document.write("<br>")


//6th mathod


document.write( "<center>")
for ( var i=9; i>=1; i=i-2){
    for ( var j=1; j<=i; j++){
        document.write("*")
        document.write(" ")
    }
    document.write("<br>")
}

document.write ("</center>")

//7th mathod


var abc =" ";

for ( var a=5 ; a>=0; a--){
    for( var b=a; b>=0; b--){
    abc+= String.fromCharCode(b+65);
    abc +=" ";
    
    }
abc +="<br>"

}

document.write(abc)


document.write("<br>")

//8th mathod

for ( var c=1; c<=3; c++){
    for( var d=1; d<=c; d++){
        document.write(d)
        document.write(" ")
    }
    document.write("<br>")  
}



for ( var a=5; a>=1; a=a-2){
    for( var b=1; b<=a; b++){
        document.write(b)
        document.write(" ") 
    }
    document.write("<br>") 
}













 










