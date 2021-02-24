/*
 * Original code by P. Rachel on Codepen
 * Link: https://codepen.io/Prachl/pen/wVjOqY
*/
const progressBar = document.querySelector("#reading-progress");
const html = document.documentElement;

function updateProgress(){
    const height = html.scrollHeight;
    const vh = html.clientHeight;
    progressBar.setAttribute('value', scrollY / (height - vh) * 100);
};
function progressScroll(){
    const scrollY = html.scrollTop;
    if (scrollY > 0){
        requestAnimationFrame(updateProgress);
    } else {
        progressBar.setAttribute('value', 0);
    }
};

function resizeProgress(){
    requestAnimationFrame(updateProgress);
}

window.addEventListener('scroll', progressScroll, false);
window.addEventListener('resize', resizeProgress, false);