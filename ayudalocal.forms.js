
// AyudaLocal Custom Form JavaScript
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("ayudalocalForm");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    // TODO: Send this data to your server or store locally
    console.log("Username submitted:", username);
  });
});
