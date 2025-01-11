// dropdown menu
const productBtn = document.getElementById("categories")
const categoriesMobile = document.getElementById("categoriesMobile")
const menu = document.getElementById("menu")
const openMenu = document.getElementById("open")
const closeMenu = document.getElementById("close")
const mobileMenu = document.getElementById("mobileMenu")
const disclosure = document.getElementById("disclosure-1")

// Toggle dropdown visibility when the button is clicked
productBtn.addEventListener('click', (event) => {
    menu.classList.toggle('hidden');
    event.stopPropagation(); // Prevent the click event from propagating to the document
});
// Close dropdown when clicking anywhere else on the document
document.addEventListener('click', () => {
    if (!menu.classList.contains('hidden')) {
        menu.classList.add('hidden'); // Hide the dropdown
    }
});

// Mobile Section

// Toggle dropdown visibility for mobile
categoriesMobile.addEventListener('click', (event) => {
    disclosure.classList.toggle('hidden');
    event.stopPropagation(); // Prevent the click event from propagating to the document
});
// openMenu
openMenu.addEventListener('click', (event) => {
    mobileMenu.classList.toggle('hidden');
    event.stopPropagation(); // Prevent the click event from propagating to the document
});
// closeMenu
closeMenu.addEventListener('click', (event) => {
    mobileMenu.classList.toggle('hidden');
    event.stopPropagation(); // Prevent the click event from propagating to the document
});


// Taps
// Select all tab buttons and content
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Add click event listener to each button
tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');

        // Remove active state from all buttons
        tabButtons.forEach((btn) => {
            btn.classList.remove("bg-[--color-red]", "hover:bg-[--color-red]", "text-white");
            btn.classList.add("text-[--color-secondary]", "bg-[--custom-white]", "hover:bg-[--custom-white]");
        });

        // Add active state to the clicked button
        button.classList.add("bg-[--color-red]", "text-white", "hover:bg-[--color-red]");
        button.classList.remove("text-[--color-secondary]", "bg-[--custom-white]");

        // Hide all tab contents and show the targeted one
        tabContents.forEach((content) => content.classList.add('hidden'));
        document.getElementById(targetTab).classList.remove('hidden');
    });
});

// for videos
const tabList = document.querySelectorAll('.tab-list');
const tabvidoes = document.querySelectorAll('.tab-video');

// Add click event listener to each button
tabList.forEach((button) => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');

        // Remove active state from all buttons
        tabList.forEach((btn) => {
            btn.classList.remove("bg-[--color-red]", "hover:bg-[--color-red]", "text-white");
            btn.classList.add("text-[--color-secondary]", "bg-[--custom-white]", "hover:bg-[--custom-white]");
        });

        // Add active state to the clicked button
        button.classList.add("bg-[--color-red]", "text-white", "hover:bg-[--color-red]");
        button.classList.remove("text-[--color-secondary]", "bg-[--custom-white]");

        // Hide all tab contents and show the targeted one
        tabvidoes.forEach((content) => content.classList.add('hidden'));
        document.getElementById(targetTab).classList.remove('hidden');
    });
});



// Instructors

const forthLi = document.getElementById("forthLi")
const forthSpan = document.getElementById("forthSpan")
const instructors = document.querySelectorAll('.accordion li')

instructors.forEach((button) => {
    // remove class on mouseover
    button.addEventListener("mouseover", () => {
        forthSpan.classList.remove("!opacity-100", "!visible");
        forthLi.classList.remove("!flex-[0_1_260px]", "md:!scale-110", "!z-10", "!opacity-100");
    });
    // reset class on mouseout
    button.addEventListener("mouseout", () => {
        forthSpan.classList.add("!opacity-100", "!visible");
        forthLi.classList.add("!flex-[0_1_260px]", "md:!scale-110", "!z-10", "!opacity-100");
    });


});

// video
const myVideo = document.getElementById("myVideo")
myVideo.addEventListener("click", () => {
    myVideo.controls = true
})
