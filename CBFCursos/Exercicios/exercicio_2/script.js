const boxCourses = document.querySelector('#containerCourses');
const courses = ["HTML", "CSS", "JavaScript", "C", "C++", "C#", "Angular"];
const btn_courseSelected = document.querySelector('#buttonSelectedCourse');
const btn_removecourse = document.querySelector('#removeCourse');
const btn_add_before = document.querySelector('#addCourseBefore');
const btn_add_after = document.querySelector('#addCourseAfter');
const courseName = document.querySelector('#courseName');

let index = 0;



// Função Para Criar Novo Curso
function createNewCourse (curso) {
    const newElement = document.createElement('div');
    newElement.setAttribute('id', `c${index}`);
    newElement.setAttribute('class', 'course');
    newElement.innerHTML = curso;

    const comands = document.createElement('div');
    comands.setAttribute('class', 'comands');

    const inputRd = document.createElement('input');
    inputRd.setAttribute('type', 'radio');
    inputRd.setAttribute('name', 'rd_course');

    comands.appendChild(inputRd);

    newElement.appendChild(comands);

    return newElement;
}


function radioSelected() {
    const allRadios = [...document.querySelectorAll('input[type=radio]')];

    let radioChecked = allRadios.filter((elem, index, array) => {
        return elem.checked;
    });
    
    return radioChecked[0];
}

courses.map((elem, id) => {
    const newElement = createNewCourse(elem);
    boxCourses.appendChild(newElement);

    index++;
});


btn_add_before.addEventListener('click', (event) => {
    const radioChecked = radioSelected();
    try {
        if (courseName.value != '') {
            const courseSelected = radioChecked.parentNode.parentNode;
            const newCourse = createNewCourse(courseName.value);
            boxCourses.insertBefore(newCourse, courseSelected);
            courseName.focus();
        } else {
            alert('Digite o nome do Curso!');
        }

    } catch (exet) {
        alert('Selecione um curso!');
    }
});

btn_add_after.addEventListener('click', (event) => {
    const radioChecked = radioSelected();
    try {
        if (courseName != '') {
            const courseSelected = radioChecked.parentNode.parentNode;
            const newCourse = createNewCourse(courseName.value);
            boxCourses.insertBefore(newCourse, courseSelected.nextSibling);
            courseName.focus();
        } else {
            
        }

    } catch (exet) {
        alert('Selecione um curso!');
    }
});

btn_courseSelected.addEventListener('click', (event) => {
    const radioChecked = radioSelected();
    // const courseSelected = radioChecked.parentNode.parentNode.firstChild.textContent;
    try {
        const courseSelected = radioChecked.parentNode.previousSibling.textContent;
        alert(`Curso Selecionado ${courseSelected}`);
    } catch (exet) {
        alert('Selecione um Curso!');
    }
});

btn_removecourse.addEventListener('click', (event) => {
    const rs = radioSelected();
    if (rs != undefined) {
        const courseSelected = rs.parentNode.parentNode;
        courseSelected.remove();
    } else {
        alert('Selecione um Curso!');
    }
});

