const str1="this is sentence";
const loopRepetition=10000;
start = performance.now();

/* example of object JSON */
let simple_object= {
    name:"Kujka",
    child: "Maja",
    age: 1,
    cuteness: "Highest Possible",
};


/* funtion to repeat some time same job*/
function WriteSomeRepeatition(input)
{
    for(iter = 0; iter < input.maxIter; iter++)
    {
        console.log(iter);
    }

}

function WriteSentence(txt)
{
    console.log(txt);

}

WriteSentence("Page was open");

WriteSentence(str1);
try {str1="aa"}
catch(error)
{
    console.log("Example of error catch");
    console.log(error);
}

WriteSentence(simple_object.child);

WriteSomeRepeatition({maxIter:loopRepetition});

document.write(str1+" "+simple_object.child);

document.write("time operation ",performance.now() - start, "ms");
