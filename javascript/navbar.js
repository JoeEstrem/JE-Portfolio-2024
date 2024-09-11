document.getElementById("menuIcon").addEventListener("click", function() {
  var sidenav = document.getElementById("myNavbar");

  // Toggle the 'open' class to expand or collapse the sidebar
  if (sidenav.classList.contains("open")) {
    sidenav.classList.remove("open");
    menuIcon.src = "../images/menu-icon-shadow.png";
  } else {
    sidenav.classList.add("open");
    menuIcon.src = "../images/menu-icon-close.png";
  }
});
