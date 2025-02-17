let words=document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters=word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span=document.createElement("span");
        span.textContent=letter;
        span.className="letter";
        word.append(span);
    });
});

let currentWordIndex=0;
let maxWordIndex=words.length -1;
words[currentWordIndex].style.opacity="1";

let changeText=()=>{
    let currentWord=words[currentWordIndex];
    let nextWord=currentWordIndex===maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i*80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000)

///////////////   circle skill ///////////////

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;


    for(let i = 0 ; i < dots ; i++){
        points += '<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>';
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i=0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }

})

function setProgress(selector, percentage) {
    const progressCircle = document.querySelector(selector);
    if (!progressCircle) {
        console.error(`Element with selector ${selector} not found.`);
        return;
    }
    const radius = 55;  // Radius of the circle
    const circumference = 2 * Math.PI * radius;  // Full circle circumference

    progressCircle.style.strokeDasharray = `${circumference}`;
    const offset = circumference - (percentage / 100) * circumference;
    progressCircle.style.strokeDashoffset = `${offset}`;
}

// Set progress for all circles
setProgress('.progress', 90);    // 90% for Team Work
setProgress('.progress1', 80);   // 80% for Problem Solving
setProgress('.progress2', 94);   // 94% for Time Management
setProgress('.progress3', 90);   // 90% for Communication

// Select all category links
const categories = document.querySelectorAll('.category');

// Loop through each category and add a click event listener
categories.forEach(category => {
    category.addEventListener('click', function(event) {
        // Remove 'active' class from all categories
        categories.forEach(cat => cat.classList.remove('active'));
        
        // Add 'active' class to the clicked category
        this.classList.add('active');
    });
});


/////////////////// active menu /////////////////////////////////////
let menuLi=document.querySelectorAll('header ul li a');
let section=document.querySelectorAll('section');
function activeMenu() {
    let len=section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec=>sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

/////////////////// active menu /////////////////////////////////////
const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>50)
})

/////////////////// toggle icon menu /////////////////////////////////////
let menuIcon=document.querySelector("#menu-icon");
let navlist=document.querySelector(".navlist");

menuIcon.onclick=()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll=()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}


///////////////////    portfolio mix    /////////////////////
var mixer = mixitup('.project__container')













