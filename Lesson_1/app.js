document.body.style.backgroundColor = "#333";
document.body.style.color = "white";
document.body.style.fontSize = "108px";

var helloText = "Welcome HTML, CSS, JavaScript, React!!!";

// alert(helloText);

console.log(helloText);

/*

document.write(helloText);

*/

var userSkills = prompt("What you know else?");

if (userSkills === null) {
  console.warn("We wanted know about your skills");
} else {
  console.log("Wow, you is great! You know:" + userSkills);
}

var experience = prompt("What is your experience (in years)?");

var developerLevel;

if (experience > 0 && experience < 1) {
  developerLevel = "junior";
} else if (experience >= 1 && experience < 5) {
  developerLevel = "middle";
} else if (experience >= 5) {
  developerLevel = "senior";
} else {
  developerLevel = "unknown";
}

console.log("You are " + developerLevel + " developer");
