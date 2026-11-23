// 1. Find all toggles
const toggles = document.querySelectorAll(".theme-toggle");

// 2. On load: read the saved theme (it may be null)
const saved = localStorage.getItem("theme");

// 3. If saved === "dark", set every toggle's .checked to true
//    (the theme-controller class then applies the theme by itself)

// 4. For each toggle,s add a "change" listener that:
//    - saves "dark" or "light" in localStorage (based on toggle.checked)
//    - sets every other toggle's .checked to the same valueconst toggles = document.querySelectorAll(".theme-toggle");

// On load: apply the saved theme
if (localStorage.getItem("theme") === "dark") {
  toggles.forEach((t) => (t.checked = true));
}

// On click: save the choice and sync both toggles
toggles.forEach((toggle) => {
  toggle.addEventListener("change", () => {
    localStorage.setItem("theme", toggle.checked ? "dark" : "light");
    toggles.forEach((t) => (t.checked = toggle.checked));
  });
});


const menuLinks = document.querySelectorAll(".dropdown-content a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.activeElement.blur();
  });
});

