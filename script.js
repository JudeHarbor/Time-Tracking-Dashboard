// Fetch data from data.json
fetch('./data.json')
    .then((res) => {
        if (!res.ok) {
            throw new Error('Network response was not ok'); // Handle network errors
        }
        return res.json(); // Parse the JSON data
    })
    .then((data) => {
        // Loop through the data and update each card
        data.forEach((item) => {
            // Get the card content element based on the title
            const cardId = item.title.toLowerCase().replace(/\s+/g, '-'); // Convert "Self Care" to "self-care"
            const cardContentEl = document.getElementById(`${cardId}-content`);

            // Insert the data into the card
            if (cardContentEl) {
                cardContentEl.innerHTML = `
                    <div class="d-flex justify-content-between">
                        <h5>${item.title}</h5>
                        <i class="bi bi-three-dots"></i>
                    </div>
                    <h2>${item.timeframes.weekly.current}hrs</h2>
                    <p>Last Week - ${item.timeframes.weekly.previous}hrs</p>
                `;
            }
        });
    })
    .catch((error) => {
        console.error('Error fetching data:', error); // Handle any errors
    });