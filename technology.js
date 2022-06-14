const technologyData = {"technology": [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
        "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": "./assets/technology/image-spaceport-portrait.jpg",
        "landscape": "./assets/technology/image-spaceport-landscape.jpg"
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
        "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]
}


let circles = document.querySelectorAll('.numberCircle');
let technologyNameHeading = document.querySelector('.technology-description-container h1');
let technologyDescription = document.querySelector('.technology-description');
let technologyImageContainer = document.querySelector('.technology-image-container');
let tabletContainer = document.querySelector('.technology-image-tablet-container');

circles.forEach(circle => {

    circle.addEventListener('click', function(e){
        circles.forEach(circle => {
            if(circle !== e.target && circle.classList.contains('circle-active')){
                circle.classList.remove('circle-active')
            } 
        })
        circle.classList.add('circle-active');

        let technologyName = e.target.dataset.name;
        let found = technologyData.technology.find(e => e.name === technologyName);
        
        // console.log(e.target.dataset.name);
        console.log(found)

        console.log(technologyName);
        technologyNameHeading.innerText = found.name;
        technologyDescription.innerText = found.description;

        if (technologyImageContainer.style.display !== 'none'){
          technologyImageContainer.classList.remove('first-animation');
          technologyImageContainer.classList.add('image-animation');
          setTimeout(myFunction, 2000);
          function myFunction(){
            technologyImageContainer.classList.remove('image-animation');
          }
        }
        technologyImageContainer.style.backgroundImage = `url('${found.images.portrait}')`;

        if (window.innerWidth < 800){
          tabletContainer.classList.remove('first-animation');
          tabletContainer.classList.add('image-animation');
          setTimeout(myFunction, 2000);
          function myFunction(){
            tabletContainer.classList.remove('image-animation');
          }
          tabletContainer.style.backgroundImage = `url('${found.images.landscape}')`;
        }

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


