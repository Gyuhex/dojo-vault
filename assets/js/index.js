function logout() {
    // Clear any user-related data in local storage or session storage
    localStorage.removeItem('currentUser');
    localStorage.removeItem('authToken');
  
    // Optionally clear all local storage (if necessary)
    // localStorage.clear();
  
    // Redirect to the login or index page
    window.location.href = "index.html";
  }
  
  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("toggleSidebar");
    const closeButton = document.getElementById("close-btn");
  
    // Toggle sidebar active class
    sidebar.classList.toggle("active");
  
    // Toggle the visibility of the close button
    closeButton.style.display = sidebar.classList.contains("active") ? 'block' : 'none';
  
    // Optionally, hide or show the hamburger button depending on sidebar state
    toggleButton.style.display = sidebar.classList.contains("active") ? 'none' : 'block';
  }
  
  // Close sidebar if the user clicks outside of it
  document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sidebar");
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnToggle = event.target.closest("#toggleSidebar"); // Ensure it's the toggle button
    const isClickOnCloseButton = event.target.closest("#close-btn"); // Ensure it's the close button
  
    // Close sidebar if click is outside and neither toggle nor close button is clicked
    if (!isClickInsideSidebar && !isClickOnToggle && !isClickOnCloseButton) {
      sidebar.classList.remove("active");
      document.getElementById("close-btn").style.display = 'none'; // Hide close button when sidebar is closed
      document.getElementById("toggleSidebar").style.display = 'block'; // Show hamburger button again
    }
  });
  