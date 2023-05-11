function printBasicInfo({ firstName, lastName, professions }) {
  console.log(firstName + " " + lastName + " - " + professions);
}

var person = {
  firstName: "Makarand",
  lastName: "Bhoir",
  age: 35,
  children: 1,
  profession: "Teacher",
};

printBasicInfo(person);
