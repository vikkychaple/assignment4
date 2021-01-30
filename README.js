# assignment4

1)

Qualtrics.SurveyEngine.addOnReady(function()
 { 
var dob_entry = getTextValue(); 
var split_dob = dob_entry.split("/"); 
var month = split_dob[0]; 
var day = split_dob[1];
 var year = split_dob[2]; 
var dob_asdate = new Date(year, month, day); 
var today = new Date();
var mili_dif = Math.abs(today.getTime() - dob_asdate.getTime());
 var age = (mili_dif / (1000 * 3600 * 24 * 365.25)); 
within_age_range=(14<age & age<24); alert(age);
 }
);




2)


<html> 
<body>
 <script>   
 function mSort (array)
 {       
if (array.length === 1)
 {       return array                            
    }    
const middle = Math.floor(array.length / 2)  const left = array.slice(0, middle)             const right = array.slice(middle)             document.write(middle);  
  return merge( mSort(left),     mSort(right)    )    }  
   function merge (left, right) 
{      
 let result = [ ]      
 let leftIndex = 0     
  let rightIndex = 0     
  while (leftIndex < left.length && rightIndex < right.length) 
{          
if (left[leftIndex] < right[rightIndex])
 {         
 result.push(left[leftIndex])       
   leftIndex++         
 document.write("</br>");               
   } 
else
 {         
 result.push(right[rightIndex])          rightIndex++        
     }  
  }  
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))  
  }    
const list = [34,7,23,32,5,62]    document.write(mSort(list));
    </script>    
</body>
    </html>


3)

html.....


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>compute the greatest common divisor (GCD) of two positive integers</title>
</head>
<body>

</body>
</html>


javascript.....


var a = 2154; //First number
var b = 458;  //Second number 
var gcd;
while (a!=b)
{
	if (a>b)
	{
		a = a -b;
	}
	else
	{
		b = b - a;
	}
}
gcd = a;
console.log(gcd);


4)



html.....


<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Get last and last n elements of an array</title>
</head>
<body>
</body>
</html>


Javascript.....


var last =  function(array, n) {
  if (array == null) 
    return void 0;
  if (n == null) 
     return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));  
  };

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));



5)
html.....

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Remove duplicate items from an JavaScript array </title>
</head>
<body>
</body>
</html>
 

Javascript.....


function removeDuplicates(num) {
  var x,
      len=num.length,
      out=[],
      obj={};
 
  for (x=0; x<len; x++) {
    obj[num[x]]=0;
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
}
var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
result = removeDuplicates(Mynum);
console.log(Mynum);
console.log(result);
