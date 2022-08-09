const bdayYear = document.querySelector(".year");
bdayYear.textContent = 1994;
var yearPlus = 1994;
const currentYear = new Date().getFullYear();
const giveYear = () => {
    if (yearPlus != currentYear) {
        yearPlus += 1;
        bdayYear.textContent = yearPlus;
    } else {
        bdayYear.textContent = currentYear;
    }
};
setTimeout(() => {
    setInterval(giveYear, 100);
}, 4000);

const celeb = document.querySelector(".celeb");
if (celeb != null) {
    setTimeout(() => {
        celeb.removeAttribute("loop", "");
    }, 4120);
}