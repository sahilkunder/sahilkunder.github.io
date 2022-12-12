const featureSection = document.getElementById('features')

const progressBars = document.querySelectorAll('.w3-progressbar')


window.addEventListener('scroll',() => {
 const sectionPos = featureSection.getBoundingClientRect().top; 
 const screenPos = window.innerHeight;
  
    if(sectionPos < screenPos){
      showProgress();
    }else{
      hideProgress();
    }
  
});
