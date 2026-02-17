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
  try {
    const result = await Promise.all([
      getStudentInfo(),
      getAttendanceInfo(),
      getReexamInfo()
    ]);

    console.log(result);

    console.log("Student has been promoted");
  } catch (err) {
    console.log("Error:", err);
  }
}

main();
  