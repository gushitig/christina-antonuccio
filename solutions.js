"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */



// 1. Write a function called `isBoolean` that returns true if the parameter has a data type of boolean. Otherwise, it returns false.

    function isBoolean(input) {
        if (typeof input === "boolean") {
            return true;
        } else {
            return false;
        }
}

console.log(isBoolean(42)); // outputs false
console.log(isBoolean("true")); // outputs false
console.log(isBoolean(false)); // outputs true

// 2. Write a function called `hasBoolean` that returns true if the array parameter contains at least one element that is a boolean. Otherwise, it returns false.

 function hasBoolean (array) {
         if (array.includes(true) || array.includes(false) ) {
             return true;
         } else {
             return false;
         }
 }

console.log(hasBoolean([1, 2, 3, 4])); // outputs false
console.log(hasBoolean([1, "false", 3, 4])); // outputs false
console.log(hasBoolean([1, 2, true, 4])); // outputs true







// Use the following data to answer questions 3 through 5:

const people = [ {
name: "Bob",
age: 42
}, {
name: "Sue",
age: 27
}, {
name: "Lou",
age: 33
}, {
name: "Zanzibar",
age: 18
}, {
name: "Gladys",
age: 39
}
];


// 3. Write a function called `minAge` that takes an array of people as a parameter and returns the smallest age in the array.

function minAge () {
    return people.reduce(function (smAgeSoFar, person) {
        if (person.age < smAgeSoFar) {
            return person.age;
        } else {
            return smAgeSoFar;
        }
    }, 43);
}
console.log(minAge(people)); // outputs 18



// 4. Write a function called `longestName` that takes an array of people as a parameter and returns the longest name in the array.
function longestName () {
    return people.reduce(function (longestNameSoFar, person) {
        if (person.name.length > longestNameSoFar.length) {
            return person.name;
        } else {
            return longestNameSoFar;
        }
    }, "");
}
console.log(longestName(people)); // outputs Zanzibar


// 5. Write a function called `createPerson` that takes a name parameter and an age parameter and returns an object containing the given name and age as properties.

function createPerson(name, age) {
    return new Object({
        name: name,
        age: age
    });

}

   const jimbob = createPerson("Jimbob", 22);
   console.log(jimbob);
//    /* outputs
//    {
//    name: "Jimbob",
//    age: 22
//    }
//    */


// 6. When the button with an id of `bold-btn` is clicked, that button's font weight should change to `bold`.
$("#bold-btn").click(function(event) {
    $(this).css("font-weight","Bold");
});



// 7. When the button with an id of `reload-btn` is clicked, the page should reload (i.e., refresh).
    $("#reload-btn").click(function () {
        location.reload(true);
    });



// 8. Whenever a list item with a class of `loud-item` is clicked, display that list item's text in an `alert()`.
$(".loud-item").click(function(event) {
    alert(this.innerText);
});



// 9. Whenever a list item with a class of `data-item` is hovered over, display that list item's `data-id` value in the span with an id of `data-display`.

// $(".data-item").hover(function(event) {
//     $("span#data-display").data().value;
// });

$(".data-item").hover(function() {
    let myId = $(this).data("id");
    $('#data-display').text(myId);
});



// 10. Whenever the button with an id of `change-text-btn` is clicked, change that button's text to whatever has been typed in the input with an id of `change-text-input`.
$("#change-text-btn").click(function(event) {
    let newText = $("#change-text-input").val();
    $(this).text(newText);
});