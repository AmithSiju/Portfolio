// Example JavaScript for form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});

document.addEventListener("DOMContentLoaded", function() {
    let items = document.querySelectorAll(".gallery-item");
    let loadMoreButton = document.getElementById("loadMore");
    let showLessButton = document.getElementById("showLess");
    let filterItems = document.querySelectorAll(".filter-item");
    let visibleItems = 9;
    let currentFilter = "all";

    function showItems(count, filter) {
        let filteredItems = Array.from(items).filter(item => filter === "all" || item.classList.contains(filter));

        items.forEach(item => item.classList.remove("visible"));  // Hide all items
        filteredItems.slice(0, count).forEach(item => item.classList.add("visible"));  // Show only filtered items
        
        loadMoreButton.style.display = (count < filteredItems.length) ? "block" : "none";
        showLessButton.style.display = (filter === "all" && count > 9) ? "block" : "none";  // Only show "Show Less" in "All" filter
    }

    loadMoreButton.addEventListener("click", function() {
        visibleItems += 9;
        showItems(visibleItems, currentFilter);
    });

    showLessButton.addEventListener("click", function() {
        visibleItems = 9;
        showItems(visibleItems, currentFilter);
    });

    filterItems.forEach(filterItem => {
        filterItem.addEventListener("click", function() {
            filterItems.forEach(item => item.classList.remove("active"));
            filterItem.classList.add("active");
            currentFilter = filterItem.getAttribute("data-filter");
            visibleItems = 9;
            showItems(visibleItems, currentFilter);
        });
    });

    // Initial load
    showItems(visibleItems, currentFilter);
});
// Array of text values to cycle through
const textArray = ["MCA Student", "Programmer", "Photographer"];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // Speed of typing (in milliseconds)
const erasingSpeed = 50; // Speed of erasing (in milliseconds)
const delayBetweenTexts = 1000; // Delay before starting to erase (in milliseconds)
const textElement = document.getElementById("changing-text");

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        textElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delayBetweenTexts); // Pause before erasing
    }
}

function eraseText() {
    if (charIndex > 0) {
        textElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length; // Move to the next text
        setTimeout(typeText, typingSpeed);
    }
}

// Start the typing effect initially
typeText();

