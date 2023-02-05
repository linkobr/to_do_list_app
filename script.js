// "listens" for when the page is fully loaded in order to read the html (?)
window.addEventListener('load', () => {
    // defines new constants which maintain constant value 
    // querySelector returns the first Element within the document that matches the specified selector
    // this matches on the id of different tags in the html, hence the pound sign
    // already created form tag with the id "new_task_form"
	const form = document.querySelector("#new_task_form");
    // already created input tag with the id "new_task_input"
	const input = document.querySelector("#new_task_input");
    // already created div with the id "tasks"
	const list_element = document.querySelector("#tasks");

    // event listener for the form const, which in the html is the form tag
    // preventDefault() prevents the page from refreshing everytime the form is submitted 
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // task is a constant define as the value of the input, which is the input tag in the html
        const task = input.value

        // guard clause - if there is no task, meaning there is no text in the input field, present an alert asking the user to add a task
        if (!task) {
            alert("Please add a task!");
            return;

        }

        // creating the task elements html via JavaScript

        // creates an div with the class "task" and assigns this to the const "task_element"
        // in html: <div class="task">
        const task_element = document.createElement("div");
        task_element.classList.add("task");

        // creates a div with the class "content" and assigns this to the const "task_content_element"
        const task_content_element = document.createElement("div");
        task_content_element.classList.add("content");

        // task_element is the parent Node of the task_content_element 
        // append the div "task_content_element" to the div "task_element" 
        // in html: <div class="task"> <div class="content">
        task_element.appendChild(task_content_element);

        // creates an input tag with the class "text, type "text, and value is the what the user inputs in the input field
        // assigns this to the const task_input_element
        // readonly so it cannot be changed or edited by the user
        const task_input_element = document.createElement("input");
        task_input_element.classList.add("text");
        task_input_element.type = "text";
        task_input_element.value = task;
        task_input_element.setAttribute("readonly", "readonly");

        // task_content_element is the parent Node of the task_input_element
        // apppends the input element "task_input_element" to the div "task_content element"
        // in html now: <div class="task"> <div class="content"> <input class="text" type="text" value=task readonly>
        task_content_element.appendChild(task_input_element);

        // create a new div with the class "actions" assigned to the const "task_actions_element"
        // in html: <div class="actions"> 
        const task_actions_element = document.createElement("div");
        task_actions_element.classList.add("actions");

        // create a new button tag with the class "edit" assigned to the const "task_edit_element"
        // in html: <button class="edit"><img src='images/edit.png'></button>
        const task_edit_element = document.createElement("button");
        task_edit_element.classList.add("edit");
        // using innerHTML instead of innerText because innerHTML returns all text including HTML tags contained by an element
        task_edit_element.innerHTML = "<img src='images/edit.png'>";

        // create a new button tag with the class "delete" assigned to the const "task_delete_element"
        // in html: <button class="delete"><img src='images/trash.png'></button>
        const task_delete_element = document.createElement("button");
        task_delete_element.classList.add("delete");
        // again, using innerHTML instead of innerText because innerHTML returns all text including HTML tags contained by an element
        task_delete_element.innerHTML = "<img src='images/trash.png'>";

        // appending the button tags to the div 
        task_actions_element.appendChild(task_edit_element);
        task_actions_element.appendChild(task_delete_element);

        // appending the div "task actions element" to the div "task_element"
        task_element.appendChild(task_actions_element);

        // appending the div "task element" to the already created div in the html with the id "tasks" assigned as the const "list_element"
        list_element.appendChild(task_element);

        // set the input value to be empty so that the input does not stay around in the input field
        input.value = "";
        
        // creating a toggle variable, initially set to true
        let toggle = true;
        // listening for the click on the task_edit_element which is a button and calling the anonymous function upon click
        task_edit_element.addEventListener(type = 'click', listener = function() {
            // set toggle to be opposite of its boolean value, true becomes false, false becomes true
            toggle = !toggle;
            // if toggle is currently true, allowing writing to the screen, change image to be the save image
            if (toggle) {
                task_edit_element.innerHTML = "<img src='images/save.png'>";
                task_input_element.removeAttribute("readonly");
                task_input_element.focus();
            // if toggle is currently false, disable writing to the screen, change image to be the edit image
            } else {
                task_edit_element.innerHTML = "<img src='images/edit.png'>";
                task_input_element.setAttribute("readonly", "readonly");
            }
        });
        // listening for the click on the task_delete_element which is a button and calling the anonymous function upon click
        task_delete_element.addEventListener('click', () => {
            // on click, remove the task_element, which is a div containing the task, from the list of tasks which is also a div
            list_element.removeChild(task_element);
        });
        
    });
});