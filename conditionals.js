// this is a comment

// If Statement

var age = 19;

if (age < 18) {
  console.log("Not Allowed to Vote");
}

//  if else statement
let number = 2;

if (number > 45) {
  //   console.log(number, "is above 45");
} else {
  //   console.log(number, "is less than 45");
}

// The else if statement

const marks = 59;

if ((marks > 45) & (marks < 54)) {
  console.log("Scored a C");
} else if ((marks > 55) & (marks < 75)) {
  console.log("Scored a B");
} else if (marks > 75) {
  console.log("You have scored an A");
} else {
  console.log("Failed");
}

// while loop

var x = 0;

while (x <= 4) {
  console.log("The Value of X: ", x);

  x++;
}