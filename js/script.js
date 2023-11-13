let investorsItems = document.querySelectorAll(".investors__item ");

investorsItemCh();
function investorsItemCh() {
    investorsItems.forEach((element) => {
        if ((element.childNodes[1].childNodes[1]).checked) {
            element.classList.add('checked_active')
        } else {
            element.classList.remove('checked_active');
        }
    });
}
investorsItems.forEach((element) => {
    element.addEventListener("click", (e) => {
            element.classList.add('checked_active')
            investorsItemCh();
    });
});