const featureSection = document.getElementById('.w3-progress-container')

const progressBars = document.querySelectorAll('.w3-progressbar')

function showProgress(){
 progressBars.forEach(progressBar=> {
  const value = progressBar.dataset.progress;
  progressBar.style.opacity = 1;
  progressBar.style.width = `${value}%`;
 });
}

window.addEventListener('scroll',() => {
 const sectionPos = featureSection.getBoundingClientRect().top; 
 const screenPos = window.innerHeight;
 
 if(sectionPos < screenPos){
  showProgress();
 }else{
  hideProgress();
 }
 
});
