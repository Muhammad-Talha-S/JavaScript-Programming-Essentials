let count = 0; // Initialize count to 0

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count; // Display the count in the HTML
}

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
}

function checkCountValue() {
    if (count % 10 === 0 && count !== 0) {
      alert(`Your Instagram post gained ${count} followers! Congratulations!`);
    }
}

function resetCount() {
    count = -1
    increaseCount();
    displayCount();
    alert("Followers Reset");

}
