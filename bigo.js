/*
1.
Yelling a question in a room with 15 people to everyone at the same time has a complexity of O(1),
because it only requires one action to yield the result.

Asking a question to each person in a room individually has a complexity of O(n) average- and worst-case, 
and O(1) best-case. That is because on average and in the worst case, the number of operations is dependant 
entirely upon the number of people in the room.
*/

/*
2.
The following algorithm has a complexity of O(1), because it only performs the if-else operation once on the value
that it's given.
*/
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};

/*
3.
The following algorithm has a complexity of O(n^2), because there is a for loop nested within another for loop, 
both of which iterate through every index of either given array.
*/
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

/*
4.
The following algorithm has a complexity of O(n) because the number of processes depends on the size of the input.
*/
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

/*
5.
Depending on the scenario, the following algorithm has a complexity of O(1) best-case, O(n) worst- and average-case. The best-case
only runs through the loop once because the match is found at array[0]. The average- and worst-case depend on the size of the array.
*/
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

/*
6.
The following algorithm has a complexity of O(n^2) because there is a for loop nested within another for loop, 
both of which iterate through every index of the given array.
*/
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

/*
7.
The following algorithm is given a number and returns an array. The array contains a fibbonacci sequence 
the same length as the given number. The function has a complexity of O(n), because it depends on the size 
of the given number.
*/
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

/*
8.
Assuming the input array is always sorted, the following algorithm has a best-case complexity of O(1) and a worst- and average-case
complexity of O(log(n)). In the best case, the array is divided in half once and the index in the middle contains the given item.
In the worst and average cases, the efficiency depends on the given array, but the data set that it must iterate through is halved
with each iteration, which will cause the curve to flatten over time.
*/
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

/*
9.
The following algorithm has a complexity of O(1) because it simply finds a random index once and returns it.
*/
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/*
10.
The following algorithm determines whether a given number is prime, returning true or false. It has a complexity of O(n)
due to the for loop. 
*/
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

/*
11.

*/