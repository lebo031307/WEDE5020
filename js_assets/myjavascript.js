/*
References:
Agafonkin, V. & Leaflet Contributors. (2026). Leaflet (Version 1.9.4) [Interactive map library]. Available from: https://leafletjs.com/
Fonticons Inc. (2026). Font Awesome (Version 6.5.0) [Icon toolkit]. Available from: https://fontawesome.com/
Google. (2026). Poppins Web Font. Available from: https://fonts.google.com/specimen/Poppins
jQuery Foundation. (2026). jQuery (Version 3.7.1) [JavaScript library]. Available from: https://code.jquery.com/
Lokesh, D. (2026). Lightbox2 (Version 2.11.4) [Image gallery library]. Available from: https://lokeshdhakar.com/projects/lightbox2/
W3Schools. (2026). HTML, CSS, JavaScript and SEO Best Practices. Available from: https://www.w3schools.com/
*/
// Wait for the DOM to be fully loaded before running any scripts
document.addEventListener("DOMContentLoaded", function() {

    // Core data array for our dynamic menu system
    var menuItems = [
        { id: 1, name: "Game Day Wings & Chips Bucket", price: "R215.90", type: "sharing" },
        { id: 2, name: "Colonel's Mega Strip Box", price: "R189.90", type: "boxes" },
        { id: 3, name: "Zinger Spicy Burger Meal", price: "R89.90", type: "meals" },
        { id: 4, name: "Streetwise 3 with regular Chips", price: "R64.90", type: "meals" }
    ];

    // Grab elements for the menu page functionality using DOM referencing
    var menuGrid = document.getElementById("dynamic-menu-container");
    var searchBox = document.getElementById("menu-search-field");

    // Function to build and inject the HTML cards into the menu grid
    function displayMenu(products) {
        if (!menuGrid) return;
        menuGrid.innerHTML = "";

        // Message to show if the user searches for something not on the menu
        if (products.length === 0) {
            menuGrid.innerHTML = "<p class='no-results-msg'>No delicious items match your search.</p>";
            return;
        }

        // Loop through the filtered items and generate the layout cards
        products.forEach(function(item) {
            var itemCard = document.createElement("div");
            itemCard.className = "menu-item";
            // Fixed: completed the broken HTML string
            itemCard.innerHTML = "<div><h4>" + item.name + "</h4><p class='menu-item-price'>" + item.price + "</p><button class='add-to-cart'><i class='fa fa-shopping-cart'></i> Add to Cart</button></div>";
            menuGrid.appendChild(itemCard);
        });
    }

    // Run the function on load to display all menu items immediately
    displayMenu(menuItems);

    // Live search filter implementation
    if (searchBox) {
        searchBox.addEventListener("input", function(event) {
            var userQuery = event.target.value.toLowerCase().trim();
            // Check if item names include what the user typed in
            var matches = menuItems.filter(function(item) {
                return item.name.toLowerCase().includes(userQuery);
            });
            displayMenu(matches);
        });
    }

    // Pop-up Lightbox Gallery setup for food images
    var triggers = document.querySelectorAll(".lightbox-trigger");
    if (triggers.length > 0) {
        // Dynamically create the modal element layout in memory
        var modalElement = document.createElement("div");
        modalElement.className = "gallery-lightbox-modal";
        // Fixed: completed the broken HTML string
        modalElement.innerHTML = "<span class='lightbox-close-control'>&times;</span><img class='lightbox-viewing-target' alt='Enlarged image'>";
        document.body.appendChild(modalElement);

        var targetImg = modalElement.querySelector(".lightbox-viewing-target");
        var closeBtn = modalElement.querySelector(".lightbox-close-control");

        // Attach click listener to each gallery image thumbnail
        triggers.forEach(function(image) {
            image.addEventListener("click", function() {
                modalElement.classList.add("modal-active");
                targetImg.src = image.src;
                targetImg.alt = image.alt;
            });
        });

        // Close the pop-up modal when the 'x' is clicked
        closeBtn.addEventListener("click", function() {
            modalElement.classList.remove("modal-active");
        });
    }

    // Client-side validation engine for the enquiry form
    var enquiryForm = document.getElementById("client-engagement-form");
    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function(e) {
            e.preventDefault();

            // Reset error text elements before running validation checks
            document.querySelectorAll(".form-error-msg").forEach(function(span) {
                span.textContent = "";
            });

            var formIsValid = true;
            var emailInput = document.getElementById("form-input-email");
            var messageInput = document.getElementById("form-input-msg");

            // Regular expression validation format for email field
            var simpleEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!simpleEmailRegex.test(emailInput.value.trim())) {
                document.getElementById("email-error-target").textContent = "Please provide a valid email format.";
                formIsValid = false;
            }

            // Minimum text length validation check for messages
            if (messageInput.value.trim().length < 10) {
                document.getElementById("message-error-target").textContent = "Your enquiry must be at least 10 characters long.";
                formIsValid = false;
            }

            // Stop form handling completely if any check failed
            if (!formIsValid) return;

            // Trigger visual feedback to emulate server processing
            var feedbackToast = document.getElementById("submission-toast-feedback");
            if (feedbackToast) {
                feedbackToast.textContent = "Sending your request to Crispy Hub. Please wait...";
            }

            // Optional: show success message after short delay
            setTimeout(function() {
                if (feedbackToast) {
                    feedbackToast.textContent = "Thank you! Your enquiry has been sent successfully.";
                }
                enquiryForm.reset();
            }, 1500);
        });
    }

});