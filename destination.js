// Define the object which contains all the data of the planets
const destinationObject = {
    "destinations": [
      {
        "name": "Moon",
        "images": {
          "png": "./assets/destination/image-moon.png",
          "webp": "./assets/destination/image-moon.webp"
        },
        "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "distance": "384,400 km",
        "travel": "3 days"
      },
      {
        "name": "Mars",
        "images": {
          "png": "./assets/destination/image-mars.png",
          "webp": "./assets/destination/image-mars.webp"
        },
        "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        "distance": "225 mil. km",
        "travel": "9 months"
      },
      {
        "name": "Europa",
        "images": {
          "png": "./assets/destination/image-europa.png",
          "webp": "./assets/destination/image-europa.webp"
        },
        "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "distance": "628 mil. km",
        "travel": "3 years"
      },
      {
        "name": "Titan",
        "images": {
          "png": "./assets/destination/image-titan.png",
          "webp": "./assets/destination/image-titan.webp"
        },
        "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        "distance": "1.6 bil. km",
        "travel": "7 years"
      }
    ]
}



document.addEventListener('DOMContentLoaded', function(){
    
    let navLinks = document.querySelectorAll('.nav-items-container div a');
    let navContainers = document.querySelectorAll('.nav-items-container div');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e){
            
            navContainers.forEach(container => {
                // console.log(container)
                if(container !== e.target && container.classList.contains('nav-active')){
                    container.classList.remove('nav-active')
                } 
            })

            e.target.parentElement.classList.add('nav-active');
        })
    })

    let destinationLinks = document.querySelectorAll('.destination-nav-container div a');
    let destinationContainers = document.querySelectorAll('.destination-nav-container div');
    let planetImageContainer = document.querySelector('.secondary-container-1');
    let heading = document.querySelector('.secondary-container-2 h1');
    let description = document.querySelector('.secondary-container-2 p');
    let distance = document.querySelector('.distance');
    let travelTime = document.querySelector('.travel-time');

    destinationLinks.forEach(link => {
        link.addEventListener('click', function(e){

            destinationContainers.forEach(container => {
                if(container !== e.target && container.classList.contains('nav-active')){
                    container.classList.remove('nav-active')
                } 
            })

            e.target.parentElement.classList.add('nav-active');

            let planetName = e.target.dataset.planet;
            let found = destinationObject.destinations.find(e => e.name === planetName);
            
            console.log(e.target.dataset.planet);
            console.log(`The obj is ${found.name}`)

            planetImageContainer.classList.remove('first-animation');
            planetImageContainer.classList.add('image-animation');
            setTimeout(myFunction, 2000);
            function myFunction(){
              planetImageContainer.classList.remove('image-animation');
            }

            planetImageContainer.style.backgroundImage = `url('${found.images.webp}')`;
            heading.innerText = found.name;
            description.innerText = found.description;
            distance.innerText = found.distance;
            travelTime.innerText = found.travel;
            
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
