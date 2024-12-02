// Simulate a server-side waitlist count
let waitlistCount = 100; // Initial waitlist count

// Handle form submission
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    // Simulate adding the user to the waitlist
    waitlistCount++;

    // Save the count in localStorage for the thank you page
    localStorage.setItem("waitlistCount", waitlistCount);

    // Redirect to the thank you page
    window.location.href = "thank-you.html";
});

// Display waitlist count on the thank you page
if (window.location.pathname.includes("thank-you.html")) {
    const totalCount = localStorage.getItem("waitlistCount") || 100;
    document.getElementById("total-count").textContent = totalCount;
}
