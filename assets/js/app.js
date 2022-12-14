const featureSection = document.getElementById('inn')

const progressBars = document.querySelectorAll('.w3-progressbar')

function showProgress(){
 progressBars.forEach(progressBar => {
  const value = progressBar.dataset.progress;
  progressBar.style.opacity = 1;
  progressBar.style.width = `${value}%`;
 });
}

function hideProgress(){
 progressBars.forEach(p => {
  p.style.opacity = 0;
  p.style.width = 0;
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
