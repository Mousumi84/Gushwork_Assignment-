

const downloadButton = document.getElementById("downloadBtn");    
const requestButton = document.getElementById("quoteBtn");

const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");

const closeBtn1 = document.getElementById("closeModal1");
const closeBtn2 = document.getElementById("closeModal2");

const carousel = document.getElementById("carousel");

const tabs = document.querySelectorAll(".tab");
const stepIndicator = document.getElementById("stepIndicator");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


const container = document.getElementById("imgContainer");
const image = document.getElementById("slideImage");
const lens = document.getElementById("lens");
const preview = document.getElementById("zoomPreview");




//---------------------------Modal 1----------------------------------------


console.log(downloadButton,modal1);


// Onclick of "Download Full Technical Datasheet" button a modal1 page will open 
downloadButton.addEventListener("click", (e) => {
  
  console.log(e,modal1)
  modal1.style.display = "flex";     
});

// Close modal1 (X button)
closeBtn1.addEventListener("click", () => {
  modal1.style.display = "none"; 
});

// Close on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal1) {
    modal1.style.display = "none"; 
  }
});

//--------------------------------Modal 2---------------------------------------

console.log(modal2);

// Onclick of "Download Full Technical Datasheet" button a modal2 page will open 
requestButton.addEventListener("click", (e) => {
  
  console.log(e,modal2)
  modal2.style.display = "flex";     
});

// Close modal2 (X button)
closeBtn2.addEventListener("click", (e) => {
  console.log(e)
  modal2.style.display = "none"; 
});

// Close on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal2) {
    modal2.style.display = "none"; 
  }
});



// ---------------------------------------------------------------------------------



// Expand the collapse context of "Frequently Asked Questions" section


const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
  item.querySelector(".faq-question").addEventListener("click", () => {

    items.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});


// ------------------------------------------------------------------------------------



// On click of the arrow left buttons prevBtn and arrow right button nextBtn the 
// "Versatile Applications Across Industries" Carousel images slides 


nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: 300, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -300, behavior: "smooth" });
});



// ---------------------------------------------------------------------------------------



// On responsive page design when the screen size is below 800px the step tab is displaying in the UI


let activeIndex = 0;


function updateUI() {

  // Add active
  tabs[activeIndex].classList.add("active");

  console.log(tabs,activeIndex)

  // Update step text
  stepIndicator.innerText = `Step ${activeIndex + 1}/${tabs.length}: ${tabs[activeIndex].innerText}`;

  console.log(stepIndicator)
}

// Tab click
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    activeIndex = index;
    updateUI();
  });
});

updateUI();



//------------------------------------------------------------------------------



// Interactive image and Zoom effect


// Zoom on hover
container.addEventListener("mouseenter", () => {
  lens.style.display = "block";
 
  preview.style.visibility = "visible";
  preview.style.opacity = "1";
 
  preview.style.backgroundImage = `url(${image.src})`;

  requestAnimationFrame(() => {
    updateZoom(); 
  });
});


//Zoom hide on leaving the image
container.addEventListener("mouseleave", () => {
  lens.style.display = "none"; 
  
  preview.style.opacity = "0";
  preview.style.visibility = "hidden";
});


// Track mouse movement
container.addEventListener("mousemove", moveLens);


// move lens with cursor
function moveLens(e) {
  const rect = container.getBoundingClientRect();

  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  const lensW = lens.offsetWidth / 2;
  const lensH = lens.offsetHeight / 2;

  x = x - lensW;
  y = y - lensH;

  x = Math.max(0, Math.min(x, rect.width - lens.offsetWidth));
  y = Math.max(0, Math.min(y, rect.height - lens.offsetHeight));

  lens.style.left = x + "px";
  lens.style.top = y + "px";

  updateZoom(x, y);
}


// update zoom preview
function updateZoom(x = 0, y = 0) {
  const rect = container.getBoundingClientRect();
  const previewRect = preview.getBoundingClientRect();

  const cx = previewRect.width / lens.offsetWidth;
  const cy = previewRect.height / lens.offsetHeight;

  preview.style.backgroundSize = `${rect.width * cx}px ${rect.height * cy}px`;
  preview.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;


  console.log(preview);
}































