let words = document.querySelectorAll(".word");  

words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent=letter;
        span.className=letter;
        word.append(span);
    });

});

let currentWordIndex = 0;
let maxwordIndex = words.length -1;
words[currentWordIndex].style.opacity = '1';


let changetext =()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxwordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className="letter out";
        },i * 80);
    });
    nextWord.style.opacity ='1';
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className= 'letter in'
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxwordIndex ? 0 : currentWordIndex + 1;

};

changetext();
setInterval(changetext,3000);


//circle skill

const circles = document.querySelectorAll(".circle");

circles.forEach(elem=>{
    var dots = elem.getAttribute('data-dots');
    var marked = elem.getAttribute('data-percent');
    var percent = Math.floor(dots*marked/100);
    var points = ""; 
    var rotate = 360 / dots;


    for(let i=0 ; i < dots ; i++){
        // points = '<div class="points" style = ""></div>'
        points +=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML=points;

   const pointsMarked = elem.querySelectorAll('.points')
   for(let i = 0 ; i<percent ;i++){
        pointsMarked[i].classList.add('marked')
   };
});

// mixit up with portfolio section

var mixer = mixitup('.portfolio-gallery');


// creative menu

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");



function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove('active'));
    menuLi[len].classList.add('active');

}

activeMenu();
window.addEventListener("scroll",activeMenu);



// sticky navbar


const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})