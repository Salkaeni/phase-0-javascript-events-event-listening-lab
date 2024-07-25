
// index.js

// Function to add event listener
function addingEventListener() {
    // Grab the input element by its ID
    const input = document.getElementById('button');
  
    // Define the click event handler
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Add the click event listener to the input element
    input.addEventListener('click', clickAlert);
  }
  
  // Call the function to set up the event listener
  addingEventListener();
  
