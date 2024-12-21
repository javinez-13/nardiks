document.getElementById('fetchDog').addEventListener('click', async () => {
    const dogImage = document.getElementById('dogImage');
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        if (data.status === 'success') {
            dogImage.src = data.message;
            dogImage.style.display = 'block';  // Ensure image is visible
            dogImage.classList.add('show');   // Add the 'show' class to trigger animation
        } else {
            alert('Failed to fetch dog image.');
        }
    } catch (error) {
        console.error('Error fetching the dog image:', error);
        alert('Error fetching the dog image.');
    }
});
