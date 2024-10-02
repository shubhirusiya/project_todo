document.addEventListener("DOMContentLoaded", function() {
    let inputTask = document.getElementById('inputTask');
    let priority = document.getElementById('priority');
    let dueDate = document.getElementById('dueDate');
    let addBtn = document.getElementById('addBtn');
    let list = document.getElementById('list');

    addBtn.addEventListener('click', function() {
        let taskText = inputTask.value.trim();
        let taskPriority = priority.value;
        let taskDueDate = dueDate.value;

        if (taskText !== '') {
            addItem(taskText, taskPriority, taskDueDate);
            inputTask.value = '';
            priority.value = 'low';
            dueDate.value = '';
        }
    });

    function addItem(taskText, taskPriority, taskDueDate) {
        let listItem = document.createElement("li");
        listItem.textContent = taskText + ' - Priority: ' + taskPriority + ', Due: ' + taskDueDate;
        listItem.innerHTML += '<i class="task-delete">&times;</i>';

        listItem.addEventListener("click", function() {
            this.classList.toggle('done');
        });

        listItem.querySelector(".task-delete").addEventListener("click", function(event) {
            event.stopPropagation();
            listItem.remove();
        });

        listItem.classList.add(taskPriority);

        list.appendChild(listItem);
    }
});
