let Name = prompt("Please enter your Name");
let surName = prompt("Please enter your surname");
let salary = prompt("Please enter salary");
let bonus = 500;
let finalSalary = eval(`${salary}+${bonus}`)

document.write(`Name:${Name}`);
document.write(`<br>Surname: ${surName}`);
document.write(`<br> Salary: R${finalSalary}`);

