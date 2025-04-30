// Функція для отримання всіх студентів

function getStudents() {
  fetch("http://localhost:3000/students")
    .then((res) => res.json())
    .then((data) => {
      renderStudents(data);
    });
}
getStudents();
// Функція для відображення студентів у таблиці

function renderStudents(students) {
  // твій код
  students.map((student) => {
    const row = `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>${student.skills}</td>
            <td>${student.email}</td>
            <td>${student.isEnrolled ? 'Зачислено' : 'Не зачислено'}</td>
            <td><button onclick="updateStudent(${student.id})">✏️</button><button onclick="deleteStudent(${student.id})">❌</button></td>
        </tr>
    `;
    document.getElementById('tableBody').insertAdjacentHTML('beforeend', row)
  });
}

// Функція для додавання нового студента

function addStudent(e) {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const courseInput = document.getElementById('course');
    const skillsInput = document.getElementById('skills');
    const emailInput = document.getElementById('email');
    const enrollInput = document.getElementById('isEnrolled');
    fetch("http://localhost:3000/students", {
        method: 'POST',
        body: JSON.stringify({
            id: 1,
            name: nameInput.value,
            age: ageInput.value,
            course: courseInput.value,
            skills: skillsInput.value,
            email: emailInput.value,
            isEnrolled: enrollInput.value
          })
    })
  // твій код
}

// Функція для оновлення студента

function updateStudent(id) {
    console.log(`Student ${id} edited`)
  // твій код
}

// Функція для видалення студента

function deleteStudent(id) {
    console.log(`Student ${id} deleted`)
  // твій код
}
