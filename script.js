// JavaScript for functionality, including the new background color changer
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const bgColorPicker = document.getElementById('bgColorPicker');
    
    // Add event listener for changing background color
    bgColorPicker.addEventListener('input', (e) => {
        document.body.style.background = `linear-gradient(135deg, ${e.target.value}, #56ab2f)`; // Update body background with gradient
    });
    
    addTaskBtn.addEventListener('click', addTask);
    
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }
        
        const li = document.createElement('li');
        li.textContent = taskText;
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        });
        
        li.prepend(checkbox);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });
        
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }
    
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
