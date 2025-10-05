/* ================================
   Tenerife Holiday Locations - JS
   ================================ */

/*jslint browser: true, devel: true */
/*global google, window, localStorage */

var map;
var markers = [];

/**
 * Initialize Google Map
 */
function initMap() {
    var loader, mapEl, locations, i, lat, lng, name, marker, infoWindow;

    loader = document.getElementById("mapLoader");
    mapEl = document.getElementById("googleMap");
    if (!mapEl) {
        return;
    }

    loader.style.display = "none";
    mapEl.classList.remove("loading");

    map = new google.maps.Map(mapEl, {
        center: { lat: 28.2916, lng: -16.6291 },
        mapTypeId: "roadmap",
        zoom: 10
    });

    locations = document.querySelectorAll(".location");

    for (i = 0; i < locations.length; i += 1) {
        lat = parseFloat(locations[i].dataset.lat);
        lng = parseFloat(locations[i].dataset.lng);
        name = locations[i].dataset.name;

        marker = new google.maps.Marker({
            map: map,
            position: { lat: lat, lng: lng },
            title: name
        });

        infoWindow = new google.maps.InfoWindow({
            content: "<strong>" + name + "</strong>"
        });

        // Marker click listener
        (function (m, iw) {
            m.addListener("click", function () {
                iw.open(map, m);
                map.setZoom(13);
                map.setCenter(m.getPosition());
            });
        }(marker, infoWindow));

        // Card click & keyboard listener
        (function (m, iw, loc) {
            loc.addEventListener("click", function () {
                map.setZoom(13);
                map.setCenter(m.getPosition());
                iw.open(map, m);
            });
            loc.addEventListener("keypress", function (e) {
                if (e.key === "Enter") {
                    loc.click();
                }
            });
        }(marker, infoWindow, locations[i]));

        markers.push(marker);
    }
}

/**
 * Search functionality
 */
function setupSearch() {
    var form, input, resetBtn, feedback, locations, i, j, query, name, found;

    form = document.getElementById("searchForm");
    input = document.getElementById("searchInput");
    resetBtn = document.getElementById("resetSearch");
    feedback = document.getElementById("searchFeedback");
    locations = document.querySelectorAll(".location");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        query = input.value.toLowerCase().trim();
        found = false;

        for (j = 0; j < locations.length; j += 1) {
            name = locations[j].dataset.name.toLowerCase();
            if (name.indexOf(query) !== -1) {
                locations[j].style.display = "block";
                found = true;
            } else {
                locations[j].style.display = "none";
            }
        }

        if (query === "") {
            feedback.textContent = "Please type a location to search.";
        } else if (!found) {
            feedback.textContent = "No results found.";

            // Reset map view if no results
            if (map) {
                map.setZoom(10);
                map.setCenter({ lat: 28.2916, lng: -16.6291 });
            }
        } else {
            feedback.textContent = "Showing results for \"" + query + "\".";
        }
    });

    resetBtn.addEventListener("click", function () {
        query = "";
        for (i = 0; i < locations.length; i += 1) {
            locations[i].style.display = "block";
        }
        feedback.textContent = "Search reset. Showing all locations.";

        // Reset map view
        if (map) {
            map.setZoom(10);
            map.setCenter({ lat: 28.2916, lng: -16.6291 });
        }
    });
}

/**
 * Contact Form Validation
 */
function setupContactForm() {
    var form, feedback, name, email, message, emailPattern, messages, m;

    form = document.getElementById("contactForm");
    feedback = document.getElementById("contactFeedback");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        name = document.getElementById("contactName").value.trim();
        email = document.getElementById("contactEmail").value.trim();
        message = document.getElementById("contactMessage").value.trim();

        if (!name || !email || !message) {
            feedback.textContent = "⚠️ Please complete all fields.";
            feedback.style.color = "red";
            return;
        }

        emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            feedback.textContent = "⚠️ Please enter a valid email address.";
            feedback.style.color = "red";
            return;
        }

        messages = JSON.parse(localStorage.getItem("messages") || "[]");

        m = {
            date: new Date().toISOString(),
            email: email,
            message: message,
            name: name
        };

        messages.push(m);
        localStorage.setItem("messages", JSON.stringify(messages));

        feedback.textContent =
            "✅ Thank you! Your message has been saved locally.";
        feedback.style.color = "green";
        form.reset();
    });
}

/**
 * Initialize App
 */
document.addEventListener("DOMContentLoaded", function () {
    setupSearch();
    setupContactForm();
});

// Google Maps init function must be global
window.initMap = initMap;