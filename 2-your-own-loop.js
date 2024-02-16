// Your code here.
function loop(peanut, butter, jelly, time){
    if (butter(peanut) === false) {
        return 'Peanut Butter Jelly Time';
    }

    time(peanut);

    return(loop(jelly(peanut), butter, jelly, time));
}

console.log(loop(3, n => n > 0, n => n - 1, console.log));
// → 3
// → 2
// → 1