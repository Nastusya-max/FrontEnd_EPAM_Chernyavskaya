const studentList = document.querySelector('.student-list');
const addStudentForm = document.querySelector('.add-student-form');
// url JSON-server with list of students
const url = 'http://localhost:3000/students';
let output = '';

const idValue = document.getElementById('id-value');
const firstNameValue = document.getElementById('firstName-value');
const secondNameValue = document.getElementById('secondName-value');
const ageValue = document.getElementById('age-value');
const specialityValue = document.getElementById('speciality-value');
const btnSubmit = document.querySelector('.btn');

const renderStudents = (students) => {
    students.forEach(student => {
        output += `
        <div class="card mt-4 col-md-6 bg-ligt">
            <div class="card-body" data-id=${student.id}>
                <h5 class="card-secondName">${student.secondName}</h5>
                <h5 class="card-firstName">${student.firstName}</h5>
                <label class="label-id mb-2 text-muted">ID:</label>
                <h6 class="card-id mb-2 text-muted">${student.id}</h6>
                <label class="label-age mb-2 text-muted">Age:</label>
                <h6 class="card-age mb-2 text-muted">${student.age}</h6>
                <label class="label-speciality mb-2 text-muted">Speciality:</label>
                <h6 class="card-speciality mb-2 text-muted">${student.speciality}</h6>
                <a href="#" class="card-link" id="edit-student">Edit</a>
                <a href="#" class="card-link" id="delete-student">Delete</a>
            </div>
        </div>
        `;
    });
    studentList.innerHTML = output;
}

// GET request
fetch(url)
    .then(res => res.json())
    .then(data => renderStudents(data))

studentList.addEventListener('click', (e) =>{
    e.preventDefault();
    let delButtonIsPressed = e.target.id == 'delete-student';
    let editButtonIsPressed = e.target.id == 'edit-student';

    let id = e.target.parentElement.dataset.id;
    //Delete the existing student
    //DELETE request
    if(delButtonIsPressed){
        fetch(`${url}/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(() => location.reload())
    }

    if(editButtonIsPressed){
        const parent = e.target.parentElement;
        let secondNameContent = parent.querySelector('.card-secondName').textContent;
        let firstNameContent = parent.querySelector('.card-firstName').textContent;
        let idContent = parent.querySelector('.card-id').textContent;
        let ageContent = parent.querySelector('.card-age').textContent;
        let specialityContent = parent.querySelector('.card-speciality').textContent;

        secondNameValue.value = secondNameContent;
        firstNameValue.value = firstNameContent;
        idValue.value = idContent;
        ageValue.value = ageContent;
        specialityValue.value = specialityContent;
    }

 //UPDATE request
        btnSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            fetch(`${url}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: idValue.value,
                    firstName: firstNameValue.value, 
                    secondName: secondNameValue.value,
                    age: ageValue.value,
                    speciality: specialityValue.value
                })
            })
                .then(res => res.json())
                .then(() => location.reload())
    })
});

// POST request
addStudentForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: idValue.value,
            firstName: firstNameValue.value,
            secondName: secondNameValue.value,
            age: ageValue.value,
            speciality: specialityValue.value
        })
    })
        .then(res => res.json())
        .then(data => {
            const dataArr = [];
            dataArr.push(data);
            renderStudents(dataArr);
        })

        // reset input field to empty
        idValue.value = '';
        firstNameValue.value = '';
        secondNameValue.value = '';
        ageValue.value = '';
        specialityValue.value = '';
})
