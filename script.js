/*
REGULAR EXPRESSIONS (REGEX) — IAS LEVEL

Used mainly for:
• Form validation
• Input checking
• Pattern matching in strings

---------------------------------------
1) CREATING A REGEX
---------------------------------------
*/

// Literal syntax (most common in syllabus)
let pattern = /abc/;

// Constructor syntax
let pattern2 = new RegExp("abc");

/*
---------------------------------------
2) BASIC MATCHING
---------------------------------------
*/

// Matches exact text "cat"
let p1 = /cat/;

// Case-insensitive match
let p2 = /cat/i; // matches "Cat", "CAT", etc.

/*
Common flags required in syllabus:

i  → ignore case
g  → global (find all matches)
*/

/*
---------------------------------------
3) CHARACTER CLASSES
---------------------------------------
*/

// Match any ONE digit
let digit = /\d/; // same as [0-9]

// Match any ONE letter (upper or lower)
let letter = /[A-Za-z]/;

// Match any ONE lowercase letter
let lower = /[a-z]/;

// Match any ONE uppercase letter
let upper = /[A-Z]/;

// Match any ONE whitespace (space, tab)
let space = /\s/;

// Match any word character (letter, digit, underscore)
let wordChar = /\w/;

/*
---------------------------------------
4) QUANTIFIERS (HOW MANY TIMES)
---------------------------------------
*/

// Exactly 3 digits
let exactlyThree = /\d{3}/;

// Between 2 and 5 letters
let between = /[A-Za-z]{2,5}/;

// 1 or more digits
let oneOrMore = /\d+/;

// 0 or more letters
let zeroOrMore = /[A-Za-z]*/;

// Optional (0 or 1)
let optional = /colou?r/; // matches "color" or "colour"

/*
---------------------------------------
5) POSITION MATCHING
---------------------------------------
*/

// ^  → start of string
// $  → end of string

// Must start with A
let startWithA = /^A/;

// Must end with digit
let endWithDigit = /\d$/;

// Entire string must be exactly 5 digits
let fiveDigitsOnly = /^\d{5}$/;

/*
---------------------------------------
6) ALTERNATION (OR)
---------------------------------------
*/

// Match "cat" OR "dog"
let animal = /cat|dog/;

/*
---------------------------------------
7) COMMON IAS EXAM VALIDATION EXAMPLES
---------------------------------------
*/

// Validate 4-digit PIN
let pin = /^\d{4}$/;

// Validate simple email (basic level)
let email = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// Validate UK postcode (simplified)
let postcode = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/;

/*
---------------------------------------
8) TESTING A REGEX
---------------------------------------
*/

let re = /^\d{4}$/;
let result = re.test("1234"); // returns true
let result2 = re.test("12a4"); // returns false

/*
---------------------------------------
IAS EXAM KEY CONCEPTS TO REMEMBER
---------------------------------------

• [] defines allowed characters
• {} defines number of repetitions
• + means one or more
• * means zero or more
• ? means optional
• ^ start of string
• $ end of string
• | means OR
• \d digit
• \w word character
• \s whitespace

Main use in syllabus:
→ Input validation
→ Form verification
→ Ensuring correct data format

*/
