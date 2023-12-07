// Declare a variable named 'form' and assign it the value of form element in the page
const form = document.querySelector('form');
// Declare a variable named 'list' and assign it the value of ul element in the page
const list = document.querySelector('ul');

// Add an event listener for the 'submit' event
form.addEventListener('submit', function(event) {
  // Prevent the form being actually submitted
    event.preventDefault();

  // Find input element and assign it to the variable 'task'
    const input = document.querySelector('input');
    const task = input.value;

    // Check if there is a task(input)
    if (task) {  

        // Create new li and add the task and empty checkbox icon
        const listElement = document.createElement('li');
        listElement.innerHTML = '<i class="far fa-square"></i> ';
        listElement.appendChild(document.createTextNode(task));

        // Add the new listElement as a child to the ul
        const list = document.querySelector('ul');
        list.appendChild(listElement);

        // Clear the input field to an empty string
        input.value = '';
    }
});

// When click event occurs within the list element...
list.addEventListener("click", function(event) {

    // If the clicked element is i tag for icons, perform updateToDo function
    if (event.target.tagName === 'I') {
        updateToDo(event.target);
    }
});

function updateToDo(icon) {
    // When clicked, toggle the checked and unchecked icon
    icon.classList.toggle('fa-square');
    icon.classList.toggle('fa-check-square');
    // Find the parent element, li, and apply css style on the class named 'complete' 
    icon.parentElement.classList.toggle('complete');
}