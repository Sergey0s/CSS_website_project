const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative')
const selectPlanButton = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const ctaButton = document.querySelector(".main-nav__item--cta");

for (let i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener(
        'click',
        function () {
            // modal.style.display = 'block';
            // backdrop.style.display = 'block';
            modal.classList.add("open");
            backdrop.style.display = "block";
            setTimeout(() => {
                backdrop.classList.add("open");
            }, 10);
        })
}
backdrop.addEventListener('click', function () {
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}


function closeModal() {
    // modalNoButton.style.display = 'none';
    // backdrop.style.display = 'none';
    if (modal) {
        modal.classList.remove("open");
    }
    backdrop.classList.remove("open");
    setTimeout(() => {
        backdrop.style.display = "none";
    }, 200);
}

toggleButton.addEventListener('click',
    function () {
        mobileNav.classList.add("open");
        backdrop.style.display = "block";
        setTimeout(() => {
            backdrop.classList.add("open");
        }, 10);
    });

ctaButton.addEventListener("animationstart", function (event) {
    console.log("animation started", event)
});

ctaButton.addEventListener("animationend", function (event) {
    console.log("animation end", event)
});

ctaButton.addEventListener("animationiteration", function (event) {
    console.log("animation iteration", event)
});