
/*
'use strict';

let task_input = document.querySelector('#task_input_bar');
let add_task_btn = document.querySelector('#add_task_btn');
let task_section = document.querySelector('.tasks_list');


add_task_btn.addEventListener('click', function (a) {
    a.preventDefault();

    if (!task_input.value) {
        alert("Please enter \nWhat you have planned for today?");

    } else {
        let task_div = document.createElement('div');
        task_div.classList.add('task_div');

        let your_task = document.createElement('input');
        your_task.value = task_input.value;
        your_task.classList.add('your_task');
        your_task.setAttribute('readonly', 'readonly');

        task_div.appendChild(your_task);

        let task_done = document.createElement('button');
        task_done.innerHTML = `Complete`;
        task_done.classList.add('task_done');

        task_div.appendChild(task_done);

        let edit_btn = document.createElement('button');
        edit_btn.innerHTML = `<i class="fas fa-edit"></i> Edit`;
        edit_btn.classList.add('edit_btn');

        task_div.appendChild(edit_btn);

        let delete_btn = document.createElement('button');
        delete_btn.innerHTML = `<i class="fa fa-trash"></i> Delete`;
        delete_btn.classList.add('delete_btn');


        task_div.appendChild(delete_btn);

        task_section.appendChild(task_div);

        task_input.value = '';

        task_done.addEventListener('click', function () {
            if (task_done.innerHTML == "Complete") {
                this.innerHTML = "Completed";
                this.style.backgroundColor = "green";
                your_task.classList.add('task_completed');
                your_task.focus();

            } else if (task_done.innerHTML == "Completed") {
                this.innerHTML = "Complete";
                this.style.backgroundColor = "#eaaa00";
                your_task.classList.remove('task_completed');
            };

        });

        edit_btn.addEventListener('click', function () {
            if (edit_btn.innerHTML == '<i class="fas fa-edit"></i> Edit') {
                your_task.removeAttribute('readonly', 'readonly');
                your_task.classList.add('outline');
                this.innerHTML = '<i class="fas fa-save"></i> Save';
                this.style.backgroundColor = 'white';
                this.style.color = "#eaaa00";
            } else {
                your_task.setAttribute('readonly', 'readonly');
                your_task.classList.remove('outline');
                this.innerHTML = '<i class="fas fa-edit"></i> Edit';
                this.style.color = 'white';
                this.style.backgroundColor = "#eaaa00";
            };
        });

        delete_btn.addEventListener('click', function () {
            task_section.removeChild(task_div);
        });
    };
});
*/





'use strict';

let task_input = document.querySelector('#task_input_bar');
let add_task_btn = document.querySelector('#add_task_btn');
let task_section = document.querySelector('.tasks_list');



add_task_btn.addEventListener('click', function (a) {
    a.preventDefault();

    let trim_input = task_input.value.trim();

    if (trim_input == '') {
        alert("Please enter \nWhat you have planned for today?");
        task_input.value = ''

    } else {
        let task_div = document.createElement('div');
        task_div.classList.add('task_div');

        let your_task = document.createElement('input');
        your_task.value = trim_input;
        your_task.classList.add('your_task');
        your_task.setAttribute('readonly', 'readonly');

        task_div.appendChild(your_task);




        let task_done = document.createElement('button');
        task_done.innerHTML = `Complete`;
        task_done.classList.add('task_done');

        task_div.appendChild(task_done);

        let edit_btn = document.createElement('button');
        edit_btn.innerHTML = `<i class="fas fa-edit"></i> Edit`;
        edit_btn.classList.add('edit_btn');

        task_div.appendChild(edit_btn);

        let delete_btn = document.createElement('button');
        delete_btn.innerHTML = `<i class="fa fa-trash"></i> Delete`;
        delete_btn.classList.add('delete_btn');


        task_div.appendChild(delete_btn);

        task_section.appendChild(task_div);

        task_input.value = '';

        task_done.addEventListener('click', function () {
            if (task_done.innerHTML == "Complete") {
                this.innerHTML = "Completed";
                this.style.backgroundColor = "green";
                your_task.classList.add('task_completed');
                your_task.focus();

            } else if (task_done.innerHTML == "Completed") {
                this.innerHTML = "Complete";
                this.style.backgroundColor = "#eaaa00";
                your_task.classList.remove('task_completed');
            };

        });

        edit_btn.addEventListener('click', function () {
            let check = your_task.value.trim();
            if (edit_btn.innerHTML == '<i class="fas fa-edit"></i> Edit') {
                your_task.removeAttribute('readonly', 'readonly');
                your_task.classList.add('outline');
                this.innerHTML = '<i class="fas fa-save"></i> Save';
                this.style.backgroundColor = 'white';
                this.style.color = "#eaaa00";
            }
            else if (!check) {
                alert("Please fill this empty task!");
                your_task.value = '';
            }
            // else if(check){
            //     your_task.setAttribute('readonly', 'readonly');
            //     your_task.classList.remove('outline');
            //     your_task.value = check;
            //     this.innerHTML = '<i class="fas fa-edit"></i> Edit';
            //     this.style.color = 'white';
            //     this.style.backgroundColor = "#eaaa00";
            // }
            else {
                your_task.setAttribute('readonly', 'readonly');
                your_task.classList.remove('outline');
                your_task.value = check;
                this.innerHTML = '<i class="fas fa-edit"></i> Edit';
                this.style.color = 'white';
                this.style.backgroundColor = "#eaaa00";
            };
        });

        delete_btn.addEventListener('click', function () {
            task_section.removeChild(task_div);
        });
    };
});
