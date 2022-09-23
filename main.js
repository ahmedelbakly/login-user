// /* class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }

//     age() {
//       let date = new Date();
//       return date.getFullYear() - this.year;
//     }
//     depress() {
//       return `${(this.age() / 20) * 100}%`;
//     }
//   }

//   const myCar2 = new Car("Toyota",2006 );
//   document.getElementById("demo1").innerHTML = `the car name is ${
//     myCar2.name
//   } <br> the car date is ${myCar2.year}
// <br> the age of car is ${myCar2.age()} years <br> the percentage of depress is ${myCar2.depress()}`;
//  */
//////////////////////////////////////////////

/* const person = (name, age, eyeColor) => {
this.name = name,
this.age = age,
this.eyeColor = eyeColor

} */
///////////////////////////////////////////////////////////////////////////
const omar = ["Omar", 3, "green"];
const ahmed = ["Ahmed", 34, "blue"];
const hadeer = ["Hadeer", 27, "green"];
//////////////////////////////////////////////////////////////
function createObj() {
  const inputV = document.getElementById("user").value;
  const userInfo = document.getElementById("userInfo");
  const userName = inputV.toLowerCase();
  if (userName=="please select user"){
    userInfo.style.display="none";
}
if (userName!=="please select user"){
    userInfo.style.display="block";
}

  console.log(userName);
  let Array;
  if (userName == "ahmed") {
    Array = ahmed;
  }
  if (userName == "omar") {
    Array = omar;
  }
  if (userName == "hadeer") {
    Array = hadeer;
  }



  function person(name, age, eyeColor) {
    (this.name = name), (this.age = age), (this.eyeColor = eyeColor);
  }

  let newObject = new person(Array[0], Array[1], Array[2]);
  console.log(newObject);

 
  userInfo.innerHTML = ` the user name is ${newObject.name} <br>
the user age is ${newObject.age} years old <br> the eyeColor of user is ${newObject.eyeColor}`;

}
