const observerOptions = {
    threshold: 0.1, 
};

const createObserver = (selector, className) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
            }
        });
    }, observerOptions);

    document.querySelectorAll(selector).forEach(element => observer.observe(element));
};

createObserver('.card', 'in-view');
createObserver('.imagen', 'vista');
