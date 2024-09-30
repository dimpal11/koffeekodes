const navDialog = document.getElementById('nav-dialog');
function handleMenu() {
  navDialog.classList.toggle('hidden');
}

// ye slider hai start
const slides = document.querySelector('.slides');
let currentSlide = 0;
const totalSlides = slides.children.length;

// Function to update the slider position
function updateSlider() {
  const slideWidth = slides.children[0].offsetWidth;
  slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Move to the next slide automatically
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the first slide
  updateSlider();
}

// Automatic slide change every 3 seconds
const autoSlideInterval = 5000; // 3 seconds
setInterval(nextSlide, autoSlideInterval);
// // ye slider end hai 


// typesriter hai 
// var app = document.getElementById("app");

// var typewriter = new Typewriter(app, {
//   loop: false,
//   delay: 75
// });

// typewriter
//   .typeString("This is a<br> multiline typewriter<br> text effect")
//   .start();


const typewriterTexts = [
  `A:/ Idea Generation: Creating or formulating new concepts. 
   B:/ Project Start: Conceptualization phase begins during the initial design stage. 
   C:/ Scope Definition: Outlining the project's boundaries and objectives. 
   D:/ Feature Identification: Listing the desired design features and requirements.`,
   
  `A:/ Brainstorm: Collecting ideas for the project. 
   B:/ Develop: Begin initial development and plans. 
   C:/ Align: Ensure all components align with the goal. 
   D:/ Review: Conduct reviews for progress.`,
   
  `A:/ Execution Phase: Starting to build the actual project. 
   B:/ Coding: Writing the code to bring the project to life. 
   C:/ Testing: Ensuring functionality through various test cases. 
   D:/ Feedback: Gathering feedback from stakeholders.`,
   
  `A:/ Refining: Polishing the project. 
   B:/ Debugging: Fixing any bugs or issues found in the project. 
   C:/ Enhancement: Adding extra features to improve the project. 
   D:/ Optimization: Making the project faster and more efficient.`,
   
  `A:/ Finalization: Wrapping up the project. 
   B:/ Delivery: Preparing for handover. 
   C:/ Documentation: Documenting the entire process. 
   D:/ Closure: Officially finishing the project.`
];

typewriterTexts.forEach((text, index) => {
  let i = 0;
  const elementId = `typewriter${index + 1}`;
  function typeWriter() {
    if (i < text.length) {
      document.getElementById(elementId).innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  typeWriter(); // Start typing for each slide
});




// counter start

// function animateCounter(id, start, end, duration) {
//   const element = document.getElementById(id);
//   let current = start;
//   const stepTime = Math.abs(Math.floor(duration / (end - start)));
//   const increment = end > start ? 1 : -1;

//   const timer = setInterval(() => {
//     current += increment;
//     element.innerHTML = current;
//     if (current === end) {
//       clearInterval(timer);
//     }
//   }, stepTime);
// }

// // When window loads, run the counters
// window.addEventListener('load', () => {
//   animateCounter('stat1', 0, 25, 1500);  // Counts from 0 to 25 in 1.5 seconds
//   animateCounter('stat2', 0, 67, 1500);  // Counts from 0 to 67 in 1.5 seconds
//   animateCounter('stat3', 0, 128, 1500); // Counts from 0 to 128 in 1.5 seconds
// });