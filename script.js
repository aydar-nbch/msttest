window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) { 
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'; 
    } else {
        navbar.style.backgroundColor = 'rgba(34, 34, 34, 0)'; 
    }
});

const buttons = document.querySelectorAll('.home-btn');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const element = document.querySelector('#home');
        const offset = 150;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

const buttons2 = document.querySelectorAll('.about-us-btn');
buttons2.forEach(button2 => {
    button2.addEventListener('click', function() {
        const element = document.querySelector('#about-us');
        const offset = 150;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

const buttons3 = document.querySelectorAll('.contacts-btn');
buttons3.forEach(button3 => {
    button3.addEventListener('click', function() {
        const element = document.querySelector('#contacts');
        const offset = 150;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


document.querySelector('#logo').addEventListener('click', function() {
    const element = document.querySelector('#home');
    const offset = 150;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ 
        top: offsetPosition, 
        behavior: 'smooth' 
    });
});
