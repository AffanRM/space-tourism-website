document.addEventListener('DOMContentLoaded', function(){
    
    // Style the navbar (desktop) which has been clicked
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

            // console.log(e.target)
            e.target.parentElement.classList.add('nav-active')
        })
    })

    // For mobile nav, when the user clicks on the hamburger logo then hide the hamburger logo
    // and display the mobile navbar with a button to close it.
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

    //Change the size of the circle upon resizing the browser window 
    let circle = document.querySelector('circle');
    let circleText = document.querySelector('text');

    window.addEventListener('resize', function(){
        if (window.innerWidth < 932){
            circle.setAttribute('r', '150');
        } else{
            circle.setAttribute('r', '180');
        }
    })

    if (window.innerWidth < 932){
        circle.setAttribute('r', '150');
    }

    window.addEventListener('resize', function(){
        if (window.innerWidth < 800){
            circle.setAttribute('cy', '150');
            circleText.setAttribute('y', '160');
        }else{
            circle.setAttribute('cy', '190');
            circleText.setAttribute('y', '200');
        }
    })

    if (window.innerWidth < 800){
        circle.setAttribute('cy', '150');
        circleText.setAttribute('y', '160');
    }

    if (window.innerWidth < 500){
        circle.setAttribute('cy', '130');
        circleText.setAttribute('y', '140');
        circle.setAttribute('r', '110');
        circle.setAttribute('cx', '190');
        circleText.setAttribute('x', '120');
    }

})