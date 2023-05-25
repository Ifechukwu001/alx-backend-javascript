// Reading a file synchronously

const fs = require('fs');

async function countStudents(path) {
  let data;
  try {
    data = await fs.promises.readFile(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  data = data.split('\n');
  data.shift();
  data.pop();
  const proData = {};

  data.forEach((stud) => {
    const temp = stud.split(',');
    const tempKey = temp.slice(-1);
    if (tempKey in proData) {
      proData[tempKey].count += 1;
      proData[tempKey].names += `, ${temp[0]}`;
    } else {
      proData[tempKey] = { count: 1, names: temp[0] };
    }
  });

  console.log(`Number of students: ${data.length}`);
  for (const field in proData) {
    if (field) {
      console.log(`Number of students in ${field}: ${proData[field].count}. List: ${proData[field].names}`);
    }
  }
}

module.exports = countStudents;
