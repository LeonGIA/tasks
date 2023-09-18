/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const arrLength = numbers.length;
    const firstAndLast: number[] = [];

    if (arrLength === 1) {
        firstAndLast.splice(0, 0, numbers[0]);
        firstAndLast.splice(1, 0, numbers[0]);
    } else if (arrLength !== 0) {
        firstAndLast.splice(0, 0, numbers[0]);
        firstAndLast.splice(1, 0, numbers[arrLength - 1]);
    }

    return firstAndLast;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripledArray = numbers.map((num: number): number => num * 3);
    return tripledArray;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const strToNum = numbers.map((str: string): number =>
        isNaN(parseInt(str)) ? 0 : parseInt(str)
    );

    return strToNum;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollarArr = amounts.map((amt: string): string =>
        amt[0] === "$" ? amt.substring(1) : amt
    );

    const strToNum = noDollarArr.map((str: string): number =>
        isNaN(parseInt(str)) ? 0 : parseInt(str)
    );

    return strToNum;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const removeQuestions = messages.filter(
        (msg: string): boolean => msg[msg.length - 1] !== "?"
    );

    const newList = removeQuestions.map((msg: string): string =>
        msg[msg.length - 1] === "!" ? msg.toUpperCase() : msg
    );

    return newList;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const wordsLessThanFour = words.filter(
        (word: string): boolean => word.length < 4
    );

    return wordsLessThanFour.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const checkColors = colors.every(
        (color: string): boolean =>
            color === "red" ||
            color === "blue" ||
            color === "green" ||
            colors.length === 0
    );

    return checkColors;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }

    const sum = addends.reduce((total: number, num: number) => total + num, 0);

    const str = sum + "=" + addends.join("+");
    return str;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const negNumIndex = values.findIndex((val: number): boolean => val < 0);

    if (negNumIndex === -1) {
        const sum = values.reduce(
            (total: number, val: number) => total + val,
            0
        );
        const newArr = [...values];

        newArr.splice(values.length, 0, sum);

        return newArr;
    } else {
        const numsBeforeNeg = [...values];
        numsBeforeNeg.splice(negNumIndex);
        const sum = numsBeforeNeg.reduce(
            (total: number, val: number) => total + val,
            0
        );

        const newArr = [...values];

        newArr.splice(negNumIndex + 1, 0, sum);

        return newArr;
    }
}
