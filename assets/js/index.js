function logout() {
    // Clear any user-related data in local storage or session storage
    localStorage.removeItem('currentUser'); // Adjust key as per your project
    localStorage.removeItem('authToken'); // If you use tokens for authentication

    // Optionally clear all local storage (if necessary)
    // localStorage.clear();

    // Redirect to the login or index page
    window.location.href = "index.html";
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
    
    // Optionally, add a close button in case the user wants to close it
    const closeButton = document.getElementById("close-btn");
    closeButton.style.display = sidebar.classList.contains("active") ? 'block' : 'none';
  }
  
  // Close sidebar if user clicks outside of it
  document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sidebar");
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnToggle = event.target.closest("button");
  
    // Close sidebar if click is outside
    if (!isClickInsideSidebar && !isClickOnToggle) {
      sidebar.classList.remove("active");
    }
  });
  