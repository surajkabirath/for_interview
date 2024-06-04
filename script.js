// Function to change background color
document.getElementById('changeColorButton').addEventListener('click', function() {
    document.body.style.background = getRandomGradient();
});

// Function to generate a random gradient
function getRandomGradient() {
    const colors = [
        ['#ff758c', '#ff7eb3'],
        ['#f953c6', '#b91d73'],
        ['#00c6ff', '#0072ff'],
        ['#f77062', '#fe5196'],
        ['#43e97b', '#38f9d7'],
        ['#fa709a', '#fee140']
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return `linear-gradient(to right, ${colors[randomIndex][0]}, ${colors[randomIndex][1]})`;
}


document.getElementById('introduceButton').addEventListener('click', function() {
    console.log('Introduction button clicked');
    const introductionElement = document.getElementById('introduction');
    introductionElement.innerHTML = `
        Good evening everyone, I am Suraj Kabirath. 
        I am passionate about web development and ready to join your team.
    `;
    introductionElement.style.color = '#ff758c';
    introductionElement.style.fontWeight = 'bold';

    // Show the Hire Me section
    document.getElementById('hireMeSection').classList.remove('hidden');

    // Show thank you message
    setTimeout(() => {
        const thankYouMessage = document.createElement('p');
        thankYouMessage.innerText = 'Thank you so much!';
        thankYouMessage.style.color = '#ff758c';
        thankYouMessage.style.fontWeight = 'bold';
        introductionElement.parentNode.insertBefore(thankYouMessage, introductionElement.nextSibling);
    }, 1000);
});


