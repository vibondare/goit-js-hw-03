"use strict";

function slugify(title) {
    const titleToLowerCase = title.toLowerCase();
    const slug = titleToLowerCase.split(" ");
    return slug.join("-");
    
}

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));