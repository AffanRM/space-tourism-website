const crewData = {"crew": [
    {
      "name": "Douglas Hurley",
      "images": {
        "png": "./assets/crew/image-douglas-hurley.png",
        "webp": "./assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": "./assets/crew/image-mark-shuttleworth.png",
        "webp": "./assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": "./assets/crew/image-victor-glover.png",
        "webp": "./assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": "./assets/crew/image-anousheh-ansari.png",
        "webp": "./assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ]}


document.addEventListener('DOMContentLoaded', function(){
    
    let navLinks = document.querySelectorAll('.nav-items-container div a');
    let navContainers = document.querySelectorAll('.nav-items-container div');
    let dots = document.querySelectorAll('.dot');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e){
            
            navContainers.forEach(container => {
                // console.log(container)
                if(container !== e.target && container.classList.contains('nav-active')){
                    container.classList.remove('nav-active')
                } 
            })

            // console.log(e.target)
            e.target.parentElement.classList.add('nav-active')
            // if (e.target.classList.contains('nav-active'))
        })
    })

    let crewImageContainer = document.querySelector('.crew-image-container');
    let role = document.querySelector('.crew-secondary-container h2');
    let name = document.querySelector('.crew-secondary-container h1');
    let bio = document.querySelector('.crew-secondary-container p');
    let crewMobileImageContainer = document.querySelector('.crew-mobile-image-container');

    dots.forEach(dot => {
        dot.addEventListener('click', function(e){


            dots.forEach(container => {
              if(container !== e.target && container.classList.contains('dot-active')){
                container.classList.remove('dot-active')
              } 
            })
            dot.classList.add('dot-active');

            // console.log('clicked!');
            let crewName = e.target.dataset.name;
            let found = crewData.crew.find(e => e.name === crewName);
            console.log(crewName);
            console.log(found);

            crewImageContainer.classList.remove('first-animation');
            crewImageContainer.classList.add('image-animation');
            setTimeout(myFunction, 2000);
            function myFunction(){
              crewImageContainer.classList.remove('image-animation');
            }

            if (crewMobileImageContainer.style.display !== 'none'){
              crewMobileImageContainer.classList.remove('first-animation');
              crewMobileImageContainer.classList.add('image-animation');
              setTimeout(myFunction, 2000);
              function myFunction(){
                crewMobileImageContainer.classList.remove('image-animation');
              }
              crewMobileImageContainer.style.backgroundImage = `url('${found.images.webp}')`;
            }
            
            crewImageContainer.style.backgroundImage = `url('${found.images.webp}')`;
            role.innerText = found.role;
            name.innerText = found.name;
            bio.innerText = found.bio;
        })
    })

})

let hamburgerLogo = document.querySelector('.hamburger-logo');
let mobileNav = document.querySelector('.mobile-nav');
let closeLogo = document.querySelector('.close-logo');

hamburgerLogo.addEventListener('click', function(e){
    hamburgerLogo.style.display = 'none';
    mobileNav.style.display = 'block';
})

closeLogo.addEventListener('click', function(e){
    hamburgerLogo.style.display = 'block';
    mobileNav.style.display = 'none';
})


// let dots = document.querySelectorAll('.dot');
// let crewMobileImageContainer = document.querySelector('.crew-mobile-image-container');
if (window.innerWidth <= 500){

  dots.forEach(dot => {
    dot.addEventListener('click', function(e){
        let found = crewData.crew.find(e => e.name === crewName);
        crewMobileImageContainer.style.backgroundImage = `url('${found.images.webp}')`;
    })
  })

}