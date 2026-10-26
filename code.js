// ==========================================
// EMILY'S SLIDESHOW
// ==========================================

let slideIndex1 = 1;

showSlides1(slideIndex1);

function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}

function showSlides1(n) {

    const slideshow = document.getElementById("emily-slideshow");

    // ONLY get slides and dots inside Emily's slideshow
    const slides = slideshow.getElementsByClassName("mySlides");
    const dots = document.querySelectorAll(
        "#emily-slideshow + div .dot"
    );

    if (n > slides.length) {
        slideIndex1 = 1;
    }

    if (n < 1) {
        slideIndex1 = slides.length;
    }

    // Hide Emily's slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active from Emily's dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the selected Emily slide
    slides[slideIndex1 - 1].style.display = "block";

    // Activate the selected Emily dot
    dots[slideIndex1 - 1].className += " active";
}


// ==========================================
// SONJA'S SLIDESHOW
// ==========================================

let slideIndex2 = 1;

showSlides2(slideIndex2);

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {

    const slideshow = document.getElementById("sonja-slideshow");

    // ONLY get slides and dots inside Sonja's slideshow
    const slides = slideshow.getElementsByClassName("mySlides");
    const dots = document.querySelectorAll(
        "#sonja-slideshow + div .dot"
    );

    if (n > slides.length) {
        slideIndex2 = 1;
    }

    if (n < 1) {
        slideIndex2 = slides.length;
    }

    // Hide Sonja's slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active from Sonja's dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the selected Sonja slide
    slides[slideIndex2 - 1].style.display = "block";

    // Activate the selected Sonja dot
    dots[slideIndex2 - 1].className += " active";
}

// ==========================================
// LAUREN'S SLIDESHOW
// ==========================================

let slideIndex3 = 1;

showSlides3(slideIndex3);

function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

function showSlides3(n) {

    const slideshow = document.getElementById("lauren-slideshow");

    // ONLY get slides and dots inside Lauren's slideshow
    const slides = slideshow.getElementsByClassName("mySlides");
    const dots = document.querySelectorAll(
        "#lauren-slideshow + div .dot"
    );

    if (n > slides.length) {
        slideIndex3 = 1;
    }

    if (n < 1) {
        slideIndex3 = slides.length;
    }

    // Hide Lauren's slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active from Lauren's dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the selected Lauren slide
    slides[slideIndex3 - 1].style.display = "block";

    // Activate the selected Lauren dot
    dots[slideIndex3 - 1].className += " active";
}


// ==========================================
// ABBY'S SLIDESHOW
// ==========================================

let slideIndex4 = 1;

showSlides4(slideIndex4);

function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
}

function showSlides4(n) {

    const slideshow = document.getElementById("abby-slideshow");

    // ONLY get slides and dots inside Abby's slideshow
    const slides = slideshow.getElementsByClassName("mySlides");
    const dots = document.querySelectorAll(
        "#abby-slideshow + div .dot"
    );

    if (n > slides.length) {
        slideIndex4 = 1;
    }

    if (n < 1) {
        slideIndex4 = slides.length;
    }

    // Hide Abby's slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active from Abby's dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the selected Abby slide
    slides[slideIndex4 - 1].style.display = "block";

    // Activate the selected Abby dot
    dots[slideIndex4 - 1].className += " active";
}



// ==========================================
// MAGGIE'S SLIDESHOW
// ==========================================

let slideIndex5 = 1;

showSlides5(slideIndex5);

function plusSlides5(n) {
    showSlides5(slideIndex5 += n);
}

function currentSlide5(n) {
    showSlides5(slideIndex5 = n);
}

function showSlides5(n) {

    const slideshow = document.getElementById("maggie-slideshow");

    // ONLY get slides and dots inside Maggie's slideshow
    const slides = slideshow.getElementsByClassName("mySlides");
    const dots = document.querySelectorAll(
        "#maggie-slideshow + div .dot"
    );

    if (n > slides.length) {
        slideIndex5 = 1;
    }

    if (n < 1) {
        slideIndex5 = slides.length;
    }

    // Hide Maggie's slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active from Maggie's dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the selected Maggie slide
    slides[slideIndex5 - 1].style.display = "block";

    // Activate the selected Maggie dot
    dots[slideIndex5 - 1].className += " active";
}