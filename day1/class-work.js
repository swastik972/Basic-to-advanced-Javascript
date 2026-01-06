let add1 = (...fun1) => {
    return fun1.reduce(
        (accumulator, currentfun1) => accumulator + currentfun1,
        0
    );
};

let fun1 = add1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`result with rest operator: ${fun1}`);

let obje1 = {
    numbers: "one,two,three,four,five,six,seven,eight,nine,ten",
};

let obje2 = {...obje1,
    letters: "a,b,c,d,e,f,g,h,i,j",
};

function mergeAndDestructure(obj1, obj2, sum) {
    const merged = { ...obj1, ...obj2, sum };
    const { numbers, letters, sum: total } = merged;
    return { numbers, letters, total };
}

const result = mergeAndDestructure(obje1, obje2, fun1);
console.log(result);
