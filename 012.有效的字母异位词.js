/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let record = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        record[s.charCodeAt(i) - 'a'.charCodeAt(0)]++

    }
    console.log(record);
    console.log("==================================");
    for (let i = 0; i < t.length; i++) {
        console.log(t.charCodeAt(i));
        record[s.charCodeAt(i) - 'a'.charCodeAt(0)]--
        // console.log(record);
    }

    return console.log(record.every(i => i === 0));
};
isAnagram('rat', 'car')