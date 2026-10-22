const doubleValues=(arr)=>{
    const doubled = arr.map(x => x * 2);
    return doubled;
}

const onlyEvenValues = (arr) => {
    const evenValues = arr.map(x => x % 2 === 0);
    return evenValues;
}

const showFirstAndLast =(arr)=>{
    const fitstAndLast=[]
    arr.forEach((element,index) => {
        if (index === 0 || index === arr.length - 1 && typeof element === 'string') {
            fitstAndLast.push(element);
        }
    });
    return fitstAndLast;
}

const vowelCount=(str="")=>{  
    const obj={a:0,e:0,i:0,o:0,u:0};
    [...str].forEach((tav) => {
        if(tav=='a'||tav=='e'||tav=='i'||tav=='o'||tav=='u'){
            obj[tav]++
        }
    })
    return obj
}

const capitalize=(str="")=>{
    const arr=str.split(" ");
    return arr.map((word) => word.toUpperCase()).join(" ");
}

const shiftLetters=(str="")=>{
    const arr=str.split("");
    arr.forEach((letter,index) => {
        if(letter>='a' && letter<='z'){
            arr[index]=String.fromCharCode(letter.charCodeAt(0)+1);
        }
    });
    return arr.join("");
}

const swapCase=(str="")=>{
    const arr=str.split(" ");
    arr.forEach((letter,index) => {
        if(index%2==0){            
            arr[index]=capitalize(letter);
        }
    });
    return arr.join(" ");
}

// console.log(doubleValues([1, 2, 3, 4, 5]));
// console.log(onlyEvenValues([1, 2, 3, 4, 5]));
// console.log(showFirstAndLast(["hello", "world"]));
// console.log(vowelCount("hello world"));
// console.log(capitalize("hello world"));
// console.log(shiftLetters("hello world"));
console.log(swapCase("hello world"));