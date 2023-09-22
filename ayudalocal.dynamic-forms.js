
// JavaScript for Dynamic Form Creation and Data Capture in Notion

document.addEventListener("DOMContentLoaded", function() {
  // 1. Identify Notion elements styled with "red" text
  // Assuming that the red text is styled with a class "notion-red"
  const redTextElements = document.querySelectorAll('.notion-red');

  // 2. Create form fields dynamically
  redTextElements.forEach((element) => {
    const placeholder = element.textContent;
    const inputField = document.createElement('input');
    inputField.setAttribute('placeholder', placeholder);
    inputField.setAttribute('class', 'dynamic-input');
    element.parentNode.replaceChild(inputField, element);
  });

  // 3. Add a Submit Button
  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  submitButton.setAttribute('id', 'dynamic-submit-button');
  document.body.appendChild(submitButton);

  // 4. Proof of Concept for Data Capture
  submitButton.addEventListener('click', function() {
    const inputData = [];
    document.querySelectorAll('.dynamic-input').forEach((inputField) => {
      inputData.push(inputField.value);
    });
    // Display captured data in the console as a proof of concept
    console.log("Captured Data:", inputData);
  });
});
