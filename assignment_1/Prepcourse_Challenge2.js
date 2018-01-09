//Exercise 1
for(var i=1; i<101;i++)
{
    if ((i%5==0) && (i%3==0)) //most strict condition first
    {
        console.log('fizzbuzz')
    }
    else if (i%5==0)
    {
      console.log('fizz')  
    }
    else if (i%3==0)
    {
        console.log('buzz') 
    }
    else 
    {
        console.log(i)
    }

}
//Exercise 2

//way2
var stringhash = '#';
var sign=true;
for (var h=2; h<=64; h++)
{   
    switch(sign)
    {case true:
        if (h%2==0) 
        {stringhash = stringhash + ' ';}
         else 
        {stringhash =stringhash +'#';}
        break;
    case false:
        if (h%2!=0) 
        {stringhash = stringhash + ' ';}
        else 
        {stringhash =stringhash +'#';}
        break;
    }
    if (h%8==0)
    { 
        sign=!sign;
        stringhash=stringhash+'\n';
    }
}
console.log(stringhash)