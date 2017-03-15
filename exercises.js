//Do not change any of the function names

function multiplyByTen(num) {
    
    var product = num * 10;
    return product;
  //return num after multiplying it by ten
  //code here
}

function subtractFive(num) {
    var result = num - 5;
    return result;
  //return num after subtracting five
  //code here
}

function areSameLength(str1, str2) {
    
    var len1 = str1.length;
    var len2 = str2.length;
    
    if (len1 === len2)
        {
            return true;
        }
    return false;
  //return true if the two strings have the same length
  //otherwise return false
  //code here
}

function areEqual(x, y) {
    
    if(x == y)
        {
            return true;
        }
    else{
        return false;
    }
  //return true if x and y are the same
  //otherwise return false
  //code here
}

function lessThanNinety(num) {
    
    if (num < 90)
        {
            return true;
        }
    else
        {
            return false;
        }
  //return true if num is less than ninety
  //otherwise return false
  //code here
}

function greaterThanFifty(num) {
    
    if (num >50)
        {
            return true;
        }
    else
        {
            return false;
        }
  //return true if num is greater than fifty
  //otherwise return false
  //code here
}

function add(x, y) {
    
    var sum = x+y;
    return sum;
  //add x and y together and return the value
  //code here
}

function subtract(x, y) {
    
    var result = x - y;
    return result;
  //subtract y from x and return the value
  //code here
}

function divide(x, y) {
    
    var quo = x/y;
    return quo ;
    
  //divide x by y and return the value
  //code here
}

function multiply(x, y) {
    
    var product= x*y;
    return product;
  //multiply x by y and return the value
  //code here
}

function getRemainder(x, y) {
    
    var remaninder = x % y;
    return remaninder;
  //return the remainder from dividing x by y
  //code here
}

function isEven(num) {
    
    if ((num%2)===0)
        {
            return true;
        }
    else{
        return false;
    }
  //return true if num is even
  //otherwise return false
  //code here
}

function isOdd(num) {
    if((num%2)===1)
        {
            return true;
        }
    else{
        return false;
    }
  //return true if num is false
  //otherwise return false
  //code here
}

function square(num) {
    
    var square_value = num*num;
    return square_value;
  //square num and return the new value
  //code here
}

function cube(num) {
    
    var cube_value = Math.pow(num,3);
    return cube_value;
  //cube num and return the new value
  //code here
}

function raiseToPower(num, exponent) {
    
    var result = Math.pow(num,exponent);
    return result;
  //raise num to whatever power is passed in as exponent
  //code here
}

function roundNumber(num) {
    
    var result = Math.round(num);
    return result;
  //round num and return it
  //code here
}

function roundUp(num) {
    
    var result = Math.ceil(num);
    return result;
  //round num up and return it
  //code here
}

function addExclamationPoint(str) {
    
    var string = str+'!';
    return string;
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
}

function combineNames(firstName, lastName) {
    
    var Full_name = firstName+' '+lastName;
    return Full_name;
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
}

function getGreeting(name) {
    
    var greeting = 'Hello'+' '+name+'!';
    return greeting;
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
    
    var area = length*width;
    return area;
  //return the area of the rectangle by using length and width
  //code here
}

function getTriangleArea(base, height) {
    
    var tri_area = 0.5*base*height;
    return tri_area;
  //return the area of the triangle by using base and height
  //code here
}

function getCircleArea(radius) {
    
    var circle_area = 3.14 * Math.pow(radius,2);
    return Math.round(circle_area);
  //return the rounded area of the circle given the radius
  //code here
}

function getRectangularPrismVolume(length, width, height) {
    
    var prism_area = length*width*height;
    return prism_area;
  //return the volume of the 3D rectangular prism given the length, width, and height
  //code here
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
