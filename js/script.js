document.addEventListener('DOMContentLoaded', function () {
    const ageOverlay = document.getElementById('age-overlay');
    const ageVerifyBtn = document.getElementById('age-verify-btn');
    const ageDeclineBtn = document.getElementById('age-decline-btn');

    // Function to set a cookie
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    // Function to get a cookie
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    // Check if the user has already verified their age
    if (getCookie('ageVerified')) {
        ageOverlay.style.display = 'none';
    }

    ageVerifyBtn.addEventListener('click', function () {
        ageOverlay.style.display = 'none';
        setCookie('ageVerified', 'true', 1); // Set ageVerified cookie to 'true' for 1 day
    });

    ageDeclineBtn.addEventListener('click', function () {
        window.location.href = 'https://www.google.com/';
    });

    // Katana Slideshow
    const katanaImages = ['flame-katana.jpg', 'sun-katana.jpg', 'thunder-katana.jpg'];
    const katanaDescription = [
        "Master the battlefield with the fiery prowess of the Flame Katana.",
        "Illuminate your path with the brilliance of the Sun Katana.",
        "Unleash the thunderous power of the Thunder Katana."
    ];

    let currentKatanaIndex = 0;
    const katanaImage = document.getElementById('katana-image');
    const katanaDescriptionText = document.getElementById('katana-description');

    function changeKatana() {
        katanaImage.src = 'images/' + katanaImages[currentKatanaIndex];
        katanaDescriptionText.textContent = katanaDescription[currentKatanaIndex];
    }

    // Change katana every 15 seconds
    setInterval(changeKatana, 15000);

    // Navigation arrows
    const prevArrow = document.getElementById('prev-arrow');
    const nextArrow = document.getElementById('next-arrow');

    prevArrow.addEventListener('click', function () {
        currentKatanaIndex = (currentKatanaIndex - 1 + katanaImages.length) % katanaImages.length;
        changeKatana();
    });

    nextArrow.addEventListener('click', function () {
        currentKatanaIndex = (currentKatanaIndex + 1) % katanaImages.length;
        changeKatana();
    });

    // Add 'active' class to current page's navigation link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === window.location.pathname) {
            link.classList.add('active');
        }
    });

    // Feedback form
    const feedbackForm = document.getElementById('contact-feedback-form');
    if(feedbackForm) {
        feedbackForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your feedback!');
        });
    }
});
