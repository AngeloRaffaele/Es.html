const student = {
    info: { name: "Bob", age: 25 },
    grades: { math: 95, science: 89 }
  };

  const { math ,science} = student.grades;
  const {name, age } = student.info;

  console.log(name);
  console.log(age);
  console.log(math);
  console.log(science);



