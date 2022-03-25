let currentSlide = 0;
let MAXSLIDES = 2;

//change this value to change the contents of a slide
createCarousel([
    {
        image: 'assets/asurance.jpg',
        title: 'Assurance Services',
        text:  'We provide financial audits, reviews, operation audits, long-form reports, due diligence, and CPA reports. Our experience makes us one of the most sought external auditors in the Philippines. We have over 300 external audit clients, ranging from domestic corporations, branches, representative offices to foreign corporations.'
    },
    {
        image: 'assets/corporate.jpg',
        title: 'Non-assurance Services',
        text:  'We provide financial audits, reviews, operation audits, long-form reports, due diligence, and CPA reports. Our experience makes us one of the most sought external auditors in the Philippines. We have over 300 external audit clients, ranging from domestic corporations, branches, representative offices to foreign corporations.'
    }
]);

function nextSlide() {
    if((currentSlide + 1) < MAXSLIDES) {
        document.getElementById('slide' + (currentSlide + 1)).classList.toggle('visibleSlide');
        currentSlide++;
        document.getElementById('slide' + (currentSlide + 1)).classList.toggle('visibleSlide');
    }
}

function prevSlide() {
    if(currentSlide > 0) {
        document.getElementById('slide' + (currentSlide + 1)).classList.toggle('visibleSlide');
        currentSlide--;
        document.getElementById('slide' + (currentSlide + 1)).classList.toggle('visibleSlide');
    }
}

function isCurrentSlide(i) {
    if( i == currentSlide)
        return "slideItem";
    return "slideItem fade";
}

function willDisplayThisSlide(i) {
    if( i == currentSlide )
        return { display: 'flex'};
    return { display: 'none'};
}

function createCarousel(slides) {
    MAXSLIDES = slides.length;
    let allSlides = '';
    slides.map((slide, i) => {
        const temp = `
            <div id="slide${i + 1}" class="slideItem" >
                <img src="${slide.image}" />
                <div class="textContainer">
                    <h3> ${slide.title}</h3>
                    <p> ${slide.text} </p>
                </div>
            </div>
        `;
        allSlides += temp;
    });

    const carousel = `
        <div class="slideContainer">
            ${allSlides}
        </div>

        <div class="buttons">
            <button class="prev" onClick="prevSlide()">&#10094;</button>
            <button class="next" onClick="nextSlide()">&#10095;</button>
        </div>
    `;
    document.getElementById('carousel').innerHTML = carousel;
    document.getElementById('slide1').classList.toggle('visibleSlide');
}
