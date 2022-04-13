
//The method that we can use to repeatedly check our page to see if elements are visible
let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)}

const numberWithCommas = (x) => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

let array = [0 , 0, 0, 0, 0];

let counter = document.querySelectorAll('.achievement__count');

isElementInViewPort = (el) => {
    let rect = el.getBoundingClientRect();
    
    return (
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

loop = () => {
    counter.forEach((counter, index) => {
        if (isElementInViewPort(counter, index) && array[index] == 0) {
            console.log("in")
            counter.setAttribute('data-current', 0);
            counter.innerText = '0';
            const target = +counter.getAttribute('data-target');
        
            const increment = target / 200;
            array[index] = array[index] + 1;
            const updateCounter = () => {
                const currentData = +counter.getAttribute('data-current');
        
                let nextValue = Math.ceil(currentData + increment); 
                nextValue = (nextValue >= target) ? target : nextValue; 
        
                if (currentData < target ) {
                    counter.setAttribute('data-current', nextValue);
                    counter.innerText = `${numberWithCommas(nextValue)}`;
                    setTimeout(updateCounter, 1)
                }
            }
            if (array[index] == 1) updateCounter();
        }
        else if (!isElementInViewPort(counter, index)) {
            array[index] = 0;
        }
    });
    scroll(loop);
}

loop();
