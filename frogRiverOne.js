//version 01
//create an array of possible positions
var arrayA=[1,3,1,4,2,3,5,4];

//create a variable for the user defined position
var position=5;
var result=arrayA.includes(position);
var indie=arrayA.indexOf(position);
//return the array index/seconds of the position if true else return -1 if position does not exist
for (let index = 0; index < arrayA.length; index++) 
{
    debugger;

    if (result) 
    {

        console.log(indie);
        break;
    }
    else
    {
        console.log("false");
    }
    
}

function solution(X, A) {
  var result=A.includes(X);
  var indie=A.indexOf(X);
  //return the array index/seconds of the position if true else return -1 if position does not exist
for (let index = 0; index < A.length; index++) 
{
    debugger;

    if (result) 
    {

        return indie;
        break;
    }
    else
    {
        return -1;
        break;
    }
    
}
}
