document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".card-item"); // Select all Pokémon cards
    const noResults = document.getElementById("noResults");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();
        let matchFound = false;

        cards.forEach(card => {
            const name = card.getAttribute("data-name").toLowerCase();

            if (name.includes(searchText)) {
                card.style.display = "block"; // Show matched cards
                matchFound = true;
            } else {
                card.style.display = "none"; // Hide unmatched cards
            }
        });

        // Show "No results found" if no matches are found
        noResults.style.display = matchFound ? "none" : "block";
    });
});
