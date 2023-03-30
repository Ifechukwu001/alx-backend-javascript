interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
};

const student1: Student = {
    firstName: 'Guillame',
    lastName: 'Silvia',
    age: 30,
    location: 'San Francisco',
};

const student2: Student = {
    firstName: 'Richard',
    lastName: 'James',
    age: 26,
    location: 'San Antonio',
};

const studentsList = [student1, student2];

let rows = '';
for (const student of studentsList) {
    const row = `<tr> <td> ${student.firstName} </td> <td> ${student.location} </td> </tr>`;
    rows += row;
}

const table = `<table> <th> <td> First Name </td> <td> Location </td>  </th> ${rows} </table>`


