// Mengambil Elemen
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search");

// Toggle Hamburger Menu
hamburgerMenu.addEventListener("click", function (event) {
  event.preventDefault();
  navbarNav.classList.toggle("active");
});

// Toggle Search Form saat ikon kaca pembesar diklik
searchButton.onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus(); // Otomatis meletakkan kursor di dalam kotak teks
  e.preventDefault();
};

// Klik di luar elemen untuk menyembunyikan sidebar dan search
document.addEventListener("click", function (e) {
  // Sembunyikan navbar jika klik di luar
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  // Sembunyikan kotak search jika klik di luar
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
