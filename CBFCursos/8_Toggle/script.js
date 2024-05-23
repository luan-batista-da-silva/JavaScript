const boxCourses = document.querySelector('#containerCourses');
const courses = ["HTML", "CSS", "JavaScript", "C", "C++", "C#", "Angular"];
const btn_courseSelected = document.querySelector('#buttonSelectedCourse');
const btn_removecourse = document.querySelector('#removeCourse');
const btn_add_before = document.querySelector('#addCourseBefore');
const btn_add_after = document.querySelector('#addCourseAfter');
const courseName = document.querySelector('#courseName');

let index = 0;



const dellSelection=() => {
    const coursesSelected = [...document.querySelectorAll('.selecionado')];
    console.log(coursesSelected);
    coursesSelected.map((elem) => {
        elem.classList.remove('selecionado');
    })
}

// Função Para Criar Novo Curso
function createNewCourse (curso) {
    const newElement = document.createElement('div');
    newElement.setAttribute('id', `c${index}`);
    newElement.setAttribute('class', 'course');
    newElement.innerHTML = curso;
    newElement.addEventListener('click', (event) => {
        dellSelection();
        event.target.classList.toggle('selecionado');
    })
    
    return newElement;
}

function courseSelected() {
    const coursesSelecteds = [...document.querySelectorAll('.selecionado')];
    
    return coursesSelecteds[0];
}

courses.map((elem, id) => {
    const newElement = createNewCourse(elem);
    boxCourses.appendChild(newElement);

    index++;
});


btn_add_before.addEventListener('click', (event) => {
    const cs = courseSelected();
    try {
        if (courseName.value != '') {
            const newCourse = createNewCourse(courseName.value);
            boxCourses.insertBefore(newCourse, cs);
            courseName.focus();
        } else {
            alert('Digite o nome do Curso!');
        }

    } catch (exet) {
        alert('Selecione um curso!');
    }
});

btn_add_after.addEventListener('click', (event) => {
    const cs = courseSelected();
    try {
        if (courseName.value != '') {
            const newCourse = createNewCourse(courseName.value);
            boxCourses.insertBefore(newCourse, cs.nextSibling);
            courseName.focus();
        } else {
            alert('Digite o nome do Curso!');
        }
    } catch (exet) {
        alert('Selecione um curso!');
    }
});

btn_courseSelected.addEventListener('click', (event) => {
    try {
        alert(`Curso Selecionado ${courseSelected().innerHTML}`);
    } catch (exet) {
        alert('Selecione um Curso!');
    }
});

btn_removecourse.addEventListener('click', (event) => {
    const cs = courseSelected();
    if (cs != undefined) {
        cs.remove();
    } else {
        alert('Selecione um Curso!');
    }
});

