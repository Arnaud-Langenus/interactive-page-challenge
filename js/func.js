// god i need a nap

(function carousel(d) {
    let images = "carousel__photo";
    let itemsArray = d.getElementsByClassName(images);
    let totalItems = items.length;
    let slide = 0;
    let moving = true;


    // Set classes
    function setInitialClasses() {
        // Targets the previous, current, and next items
        // This assumes there are at least three items.  items[totalItems - 1].classList.add("prev");
        itemsArray[0].classList.add("active");
        itemsArray[1].classList.add("next");
    }// Set event listeners
    function setEventListeners() {
        var next = d.getElementsByClassName('carousel__button--next')[0],
            prev = d.getElementsByClassName('carousel__button--prev')[0];
        next.addEventListener('click', moveNext);
        prev.addEventListener('click', movePrev);
    }
}(document));