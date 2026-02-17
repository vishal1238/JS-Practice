function getStudentInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userObj = {
        name: "John Doe",
        email: "john.doe@example.com",
        age: 20
      };

      resolve(userObj);
    }, 1000);
  });
}

function displayInfo(userObj) {
  console.log("Name:", userObj.name);
  console.log("Email:", userObj.email);
  console.log("Age:", userObj.age);
}

async function main() {
  try {
    const result = await getStudentInfo();

    console.log("Student Object:", result);

    displayInfo(result);

    console.log("Program Completed Successfully");
  } catch (err) {
    console.error("Error:", err);
  }
}

main();


// getStudentInfo  Should return onject name, email and age 

function getStudentInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
        email: "john.doe@example.com",
        age: 20
      });
    }, 1000);
  });
}

function getAttendanceInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        attendance: "85%"
      });
    }, 500);
  });
}

function getReexamInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        reexam: "Mathematics"
      });
    }, 500);
  });
}

async function main() {
  const student = await getStudentInfo();
  const attendance = await getAttendanceInfo();
  const reexam = await getReexamInfo();

  console.log(student);
  console.log(attendance);
  console.log(reexam);

  console.log("Program Completed Successfully ✅");
}

main();
