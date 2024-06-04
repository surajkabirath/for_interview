// Function to change background color

document.getElementById("changeColorButton").addEventListener("click", () => {
  document.body.style.background = getRandomColorGradient();
});

// Function to generate a random gradient
const getRandomColorGradient = () => {
  const colors = [
    ["#ff758c", "#ff7eb3"],
    ["#f953c6", "#b91d73"],
    ["#00c6ff", "#0072ff"],
    ["#f77062", "#fe5196"],
    ["#43e97b", "#38f9d7"],
    ["#ffb6b9", "#ffc3a0"],
    ["#ffef96", "#ffe8a3"],
    ["#aaffa9", "#11ffbd"],
    ["#ffbdbd", "#c9ffbf"],
    ["#ff9999", "#ffcc99"],
    ["#fa709a", "#fee140"],
  ];
  const randomColorIndex = Math.floor(Math.random() * colors.length);

  // color test
  console.log("Color at index 0:", `${colors[randomColorIndex][0]}`);
  console.log("Color at index 1:", `${colors[randomColorIndex][1]}`);

  return `linear-gradient(to right, ${colors[randomColorIndex][0]}, ${colors[randomColorIndex][1]})`;
};

document
  .getElementById("introduceButton")
  .addEventListener("click", function () {
    // checking button working or not
    console.log("Introduction button clicked");
    const introductionElement = document.getElementById("introduction");
    introductionElement.innerHTML = `
        Good evening everyone, I am Suraj Kabirath. 
        I am passionate about web development and ready to join your company.
    `;
    introductionElement.style.color = "#ff758c";
    introductionElement.style.fontWeight = "bold";

    // Show the Hire Me section
    document.getElementById("hireMeSection").classList.remove("hidden");

    // Show thank you message
    setTimeout(() => {
      const thankYouMessage = document.createElement("p");
      thankYouMessage.innerText = "Thank you so much!";
      thankYouMessage.style.color = "#ff758c";
      thankYouMessage.style.fontWeight = "bold";
      introductionElement.parentNode.insertBefore(
        thankYouMessage,
        introductionElement.nextSibling
      );
    }, 1000);
  });
