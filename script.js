/*=================================================
        Luxury Wedding Invitation
                script.js
=================================================*/

/*=========================
LOADER
=========================*/
window.onerror = function(message, source, line, column, error) {
    alert("ERROR: " + message + " | Line: " + line);
};

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    if (!loader) return;
    setTimeout(() => {

        loader.style.transition = "opacity 1s ease";
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 2200);

});

/*=========================
SCROLL PROGRESS BAR
=========================*/

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / height) * 100;

    progressBar.style.width =
        progress + "%";

});

/*=========================
SCROLL REVEAL
=========================*/

const reveals =
document.querySelectorAll(".reveal");

function revealAnimation() {

    reveals.forEach((element) => {

        const windowHeight =
            window.innerHeight;

        const top =
            element.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            element.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealAnimation
);

revealAnimation();

/*=========================
COUNTDOWN
=========================*/

const weddingDate =
new Date(
"December 20, 2026 19:00:00"
).getTime();

setInterval(() => {

    const now =
        new Date().getTime();

    const distance =
        weddingDate - now;

    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance %
                (1000 * 60))
            /
            1000
        );

    document.getElementById(
        "days"
    ).innerHTML = days;

    document.getElementById(
        "hours"
    ).innerHTML = hours;

    document.getElementById(
        "minutes"
    ).innerHTML = minutes;

    document.getElementById(
        "seconds"
    ).innerHTML = seconds;

}, 1000);

/*=========================
RSVP FORM
=========================*/

const form =
document.getElementById(
"rsvpForm"
);

form.addEventListener(
"submit",
function(e){

e.preventDefault();

alert(
"Thank you! Your RSVP has been received."
);

form.reset();

});

/*=========================
SEATING LOOKUP
=========================*/

const guests = {

"Ahmed":"Table 1",

"Ayesha":"Table 2",

"Ali":"Table 3",

"Fatima":"Table 4",

"Usman":"Table 5",

"Zain":"Table 6",

"Maryam":"Table 7",

"Hassan":"VIP Table",

"Bilal":"Family Table"

};

const searchInput =
document.getElementById(
"seatSearch"
);

const result =
document.getElementById(
"seatResult"
);

searchInput.addEventListener(
"keyup",
function(){

const value =
this.value.trim();

if(value===""){

result.innerHTML =
"Enter your name to locate your seat.";

return;

}

if(guests[value]){

result.innerHTML =
"Welcome <b>" +
value +
"</b><br>Your Seat: <b>" +
guests[value] +
"</b>";

}

else{

result.innerHTML =
"No reservation found.";

}

});

/*=========================
BACKGROUND MUSIC
=========================*/

const music =
document.getElementById(
"bgMusic"
);

const musicButton =
document.getElementById(
"musicToggle"
);

let playing = false;

musicButton.onclick = () => {

if(playing){

music.pause();

musicButton.innerHTML="▶";

}

else{

music.play();

musicButton.innerHTML="❚❚";

}

playing=!playing;

};

/*=========================
SCROLL TO TOP
=========================*/

const topButton =
document.getElementById(
"scrollTop"
);

window.addEventListener(
"scroll",
()=>{

if(window.scrollY>500){

topButton.style.display="flex";

}

else{

topButton.style.display="none";

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};/*=========================================
        script.js (Part 2)
=========================================*/

/*=========================
AUTO PLAY MUSIC
=========================*/

document.addEventListener("click", () => {

    if (!playing) {

        music.play()
        .then(() => {

            playing = true;
            musicButton.innerHTML = "❚❚";

        })
        .catch(() => {});

    }

}, { once:true });

/*=========================
MOBILE MENU
=========================*/

const menuBtn =
document.querySelector(".menuBtn");

const navMenu =
document.querySelector(".navbar ul");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});

/* Close menu after click */

document.querySelectorAll(".navbar a")
.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});

/*=========================
NAVBAR BACKGROUND
=========================*/

const header =
document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background =
        "rgba(255,255,255,.82)";

        header.style.backdropFilter =
        "blur(18px)";

        header.style.boxShadow =
        "0 15px 40px rgba(0,0,0,.08)";

    }

    else {

        header.style.background =
        "transparent";

        header.style.boxShadow =
        "none";

    }

});

/*=========================
ACTIVE NAV LINK
=========================*/

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (scrollY >= top) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});

/*=========================
GALLERY LIGHTBOX
=========================*/

const images =
document.querySelectorAll(".galleryItem img");

const lightbox =
document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML =
'<img id="lightboxImg">';

document.body.appendChild(lightbox);

const lightImage =
document.getElementById("lightboxImg");

images.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("open");

        lightImage.src = image.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("open");

});

/*=========================
3D CARD EFFECT
=========================*/

document.querySelectorAll(".card")
.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateY =
        (x / rect.width - .5) * 18;

        const rotateX =
        (y / rect.height - .5) * -18;

        card.style.transform =

        `perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

/*=========================
FLOATING PARTICLES
=========================*/

const particleContainer =
document.getElementById("particles");

for (let i = 0; i < 80; i++) {

    const dot =
    document.createElement("span");

    dot.style.position = "absolute";

    dot.style.width =
    Math.random() * 5 + 2 + "px";

    dot.style.height =
    dot.style.width;

    dot.style.borderRadius = "50%";

    dot.style.background =
    "rgba(255,215,0,.65)";

    dot.style.left =
    Math.random() * 100 + "%";

    dot.style.top =
    Math.random() * 100 + "%";

    dot.style.animation =
    `particleFloat ${
        5 + Math.random() * 12
    }s linear infinite`;

    particleContainer.appendChild(dot);

}
/*=========================
HANGING RIBBONS SYSTEM
=========================*/

function createRibbon() {

    const ribbon = document.createElement("div");

    ribbon.innerHTML = "💍 Two Hearts One Journey";

    ribbon.style.position = "fixed";
    ribbon.style.top = "-100px";
    ribbon.style.left = Math.random() * window.innerWidth + "px";

    ribbon.style.padding = "8px 16px";
    ribbon.style.background = "linear-gradient(45deg,#d4af37,#ff69b4)";
    ribbon.style.color = "#fff";
    ribbon.style.fontSize = "14px";
    ribbon.style.fontWeight = "bold";
    ribbon.style.borderRadius = "8px";
    ribbon.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";
    ribbon.style.zIndex = "9999";
    ribbon.style.pointerEvents = "none";

    document.body.appendChild(ribbon);

    const duration = 6000 + Math.random() * 3000;

    ribbon.animate(
        [
            { transform: "translateY(0)", opacity: 1 },
            { transform: `translateY(${window.innerHeight + 200}px) rotate(${Math.random()*360}deg)`, opacity: 0 }
        ],
        { duration, easing: "ease-in" }
    );

    setTimeout(() => ribbon.remove(), duration);
}

setInterval(createRibbon, 1200);

/*=========================
PAGE FADE
=========================*/

document.body.style.opacity = "0";

window.addEventListener("load", () => {

    document.body.style.transition =
    "opacity .8s";

    document.body.style.opacity = "1";

});
/*=========================
WELCOME MAIN BANNER
=========================*/

window.addEventListener("load", () => {

    const banner = document.createElement("div");

    banner.innerText = "WELCOME TO OUR WEDDING 💍";

    banner.style.position = "fixed";
    banner.style.top = "50%";
    banner.style.left = "50%";
    banner.style.transform = "translate(-50%,-50%)";

    banner.style.padding = "20px 40px";
    banner.style.background = "rgba(255,255,255,0.92)";
    banner.style.border = "2px solid gold";
    banner.style.borderRadius = "15px";

    banner.style.fontSize = "22px";
    banner.style.fontWeight = "bold";
    banner.style.color = "#c2185b";
    banner.style.boxShadow = "0 20px 50px rgba(0,0,0,0.3)";
    banner.style.zIndex = "99999";

    document.body.appendChild(banner);

    setTimeout(() => {

        banner.style.transition = "all 1s ease";
        banner.style.opacity = "0";
        banner.style.transform = "translate(-50%,-60%) scale(0.8)";

        setTimeout(() => banner.remove(), 1000);

    }, 3000);

});

/*=========================
END OF PART 2
Remaining:
- Extra premium cursor glow
- Dynamic hearts generation
- Confetti on RSVP submit
- Better seating database
- Apple-style timeline effects
- Performance optimizations
=========================================*//*=========================================
        script.js (Final Part)
=========================================*/

/*=========================
DYNAMIC FLOATING HEARTS
=========================*/

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = (16 + Math.random() * 20) + "px";
    heart.style.color = "#ff6fa5";
    heart.style.opacity = "0.8";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "-1";
    heart.style.transition = "transform 8s linear, opacity 8s linear";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {

        heart.style.transform =
            `translateY(-${window.innerHeight + 300}px)
             translateX(${Math.random() * 200 - 100}px)
             rotate(${360 + Math.random() * 360}deg)`;

        heart.style.opacity = "0";

    });

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 1200);

/*=========================
SIMPLE RSVP CONFETTI
=========================*/

function createConfetti() {

    for (let i = 0; i < 120; i++) {

        const piece = document.createElement("div");

        piece.style.position = "fixed";
        piece.style.left = Math.random() * window.innerWidth + "px";
        piece.style.top = "-20px";
        piece.style.width = "8px";
        piece.style.height = "12px";
        piece.style.borderRadius = "3px";

        const colors = [
            "#FFD700",
            "#ffb6c1",
            "#ffffff",
            "#d4af37",
            "#f4c2c2"
        ];

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.pointerEvents = "none";
        piece.style.zIndex = "99999";

        document.body.appendChild(piece);

        const duration = 3000 + Math.random() * 2000;

        piece.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${Math.random()*400-200}px,
                        ${window.innerHeight+100}px)
                        rotate(${720+Math.random()*720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );

        setTimeout(() => {

            piece.remove();

        }, duration);

    }

}

form.addEventListener("submit", () => {

    createConfetti();

    if (typeof partyPopper3D === "function") {
        partyPopper3D();
    }

});


/*=========================
PARALLAX HERO
=========================*/

window.addEventListener("scroll", () => {

    const heroSection = document.getElementById("hero");

    if (heroSection) {
        heroSection.style.backgroundPositionY =
            window.scrollY * 0.4 + "px";
    }

});

/*=========================
CURSOR GLOW
=========================*/

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "20px";
glow.style.height = "20px";
glow.style.borderRadius = "50%";
glow.style.background = "rgba(212,175,55,.35)";
glow.style.boxShadow = "0 0 30px gold";
glow.style.pointerEvents = "none";
glow.style.zIndex = "99999";
glow.style.transform = "translate(-50%,-50%)";

document.body.appendChild(glow);

window.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

/*=========================
SMOOTH BUTTON HOVER EFFECT
=========================*/

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "";

    });

});

/*=========================
CONSOLE MESSAGE
=========================*/

console.log(`
====================================
 Luxury Wedding Invitation Website
 Production Ready
 HTML + CSS + JavaScript
====================================
`);
/*=========================
HANGING LAMPS
=========================*/

function createLamps(){

const positions=[8,22,36,50,64,78,92];

positions.forEach((left,index)=>{

const lamp=document.createElement("div");

lamp.className="lamp";

lamp.style.left=left+"%";

lamp.style.height=(70+Math.random()*80)+"px";

lamp.style.animationDelay=(index*0.3)+"s";

const hero = document.getElementById("hero");
hero.appendChild(lamp);

});

}

createLamps();
/* ==================================
   🚀 3D CINEMATIC ENGINE (THREE.JS)
=================================== */

/* Load Three.js Scene */
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Canvas inject (NO HTML needed)
document.body.appendChild(renderer.domElement);
renderer.domElement.id = "three-canvas";

/* Lighting */
const light = new THREE.PointLight(0xffd700, 2);
light.position.set(0, 10, 10);
scene.add(light);

const ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient);

/* 3D Heart Object */


const heartShape = new THREE.Shape();

heartShape.moveTo(0, 0);
heartShape.bezierCurveTo(0, 0.3, -0.5, 0.3, -0.5, 0);
heartShape.bezierCurveTo(-0.5, -0.5, 0, -0.8, 0, -1);
heartShape.bezierCurveTo(0, -0.8, 0.5, -0.5, 0.5, 0);
heartShape.bezierCurveTo(0.5, 0.3, 0, 0.3, 0, 0);

const heartGeometry = new THREE.ExtrudeGeometry(heartShape, {
    depth: 0.15,
    bevelEnabled: true,
    bevelSize: 0.03,
    bevelThickness: 0.03
});


camera.position.z = 8;

/* Animation Loop */
function animate() {
  requestAnimationFrame(animate);

  

  renderer.render(scene, camera);
}
animate();

/* Resize Fix */
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

/* ==================================
   🧠 MOUSE PARALLAX 3D EFFECT
=================================== */

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  camera.position.x = x * 1.5;
  camera.position.y = -y * 1.5;
});

/* ==================================
   ✨ CURSOR GLOW EFFECT
=================================== */

const cursor = document.createElement("div");
cursor.classList.add("cursor-glow");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* ==================================
   🌸 GSAP SCROLL 3D ANIMATION
=================================== */

if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".glass").forEach((card) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 100, rotateX: 20 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      }
    );
  });
}

/* ==================================
   💫 HERO FLOATING DEPTH EFFECT
=================================== */

const heroContent = document.querySelector(".hero-Content");

if (heroContent) {

    heroContent.addEventListener("mouseleave", () => {
        heroContent.style.transform =
            "translate(-50%,-50%) rotateY(0deg) rotateX(0deg)";
    });

}
function partyPopper3D(){

if(!window.THREE) return;

const colors=[
0xffd700,
0xff69b4,
0xffffff,
0x00ffff,
0xff4444,
0x00ff99
];

const pieces=[];

for(let i=0;i<250;i++){

const geo=new THREE.BoxGeometry(
0.08,
0.18,
0.02
);

const mat=
new THREE.MeshStandardMaterial({

color:colors[
Math.floor(
Math.random()*colors.length
)],

metalness:.6,

roughness:.3

});

const mesh=
new THREE.Mesh(geo,mat);

mesh.position.set(0,0,0);

mesh.velocity=
new THREE.Vector3(

(Math.random()-.5)*.35,

Math.random()*.45+.15,

(Math.random()-.5)*.35

);

scene.add(mesh);

pieces.push(mesh);

}

let frame=0;

function explode(){

frame++;

pieces.forEach(p=>{

p.position.add(p.velocity);

p.velocity.y-=0.006;

p.rotation.x+=0.15;

p.rotation.y+=0.15;

p.rotation.z+=0.15;

});

if(frame<220){

requestAnimationFrame(explode);

}else{

pieces.forEach(p=>{

scene.remove(p);

});

}

}

explode();

}

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*16;

const y=(e.clientY/window.innerHeight-.5)*-16;

heroContent.style.transform =
`translate(-50%,-50%) rotateY(${x}deg) rotateX(${y}deg)`;

});
/*=========================
END OF SCRIPT.JS
=========================*/
