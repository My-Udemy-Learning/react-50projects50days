import React from 'react';
import './progressSteps.scss';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

// window.onload=function(){
 
  
// const progress = document.getElementById('progress');
// const prev = document.getElementById('prev');
// const next = document.getElementById('next');
// const circles = document.querySelectorAll('.circle');


// let currentActive = 1;

// next.addEventListener('click', () => {
//     currentActive++;

//     if(currentActive > circles.length) {
//         currentActive = circles.length;
        
//     }
//     // console.log(currentActive);
//     update();
// })

// prev.addEventListener('click', () => {
//     currentActive--;

//     if(currentActive < 1 ) {
//         currentActive = 1;
        
//     }
//     update();

// })

// function update() {
//     circles.forEach((circle, idx) => {
//         if(idx < currentActive) {
//             circle.classList.add('active');
//         } else {
//             circle.classList.remove('active');
//         }
//     })
//     const actives = document.querySelectorAll('.active')

//     progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

//     if(currentActive === 1) {
//         prev.disabled = true
//     } else if(currentActive === circles.length) {
//         next.disabled = true
//     } else {
//         prev.disabled = false
//         next.disabled = false
//     }
// }    

// }

const ProgressSteps = () => {
return(
    <>
<div>
    <h2>2. Progress Steps</h2>
</div>

<div className="container">
     <div className="progress-container">
       <div className="progress" id="progress"></div>
     <div className="circle active">1</div>
     <div className="circle">2</div>
     <div className="circle">3</div>
     <div className="circle">4</div>
      </div>

      <button className="btn" id="prev" disabled>Prev</button>
      <button className="btn" id="next" >Next</button>
      
  </div>


<Button variant="primary" href="/">Go Back Home</Button>
</>
)
}

export default withRouter (ProgressSteps);