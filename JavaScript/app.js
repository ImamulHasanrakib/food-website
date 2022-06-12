


// navigation related 

const navabrWrap = document.querySelector('.navbar_wrap');

window.onscroll = function() {

    if(document.documentElement.scrollTop > 20 ){
        navabrWrap.classList.add('scroll-on');
    }
    else{
        navabrWrap.classList.remove('scroll-on');
    }
};


let navLinks = document.querySelectorAll('.nav-link');

let naVcollapse = document.querySelector('.navbar-collapse.collapse');

navLinks.forEach( function(a){
    a.addEventListener('click' , function(){
        naVcollapse.classList.remove('show') 
    })
});

// counter related 

document.addEventListener('DOMContentLoaded' , () =>{
    function counter(id , start , end , duration){
        let obj = document.getElementById(id),
         current = start,
         range = end -start,
         increment = end > start ? 5 : -5 ,
         step = Math.abs(Math.floor(duration / range)),
         time = setInterval(() =>{
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(time);
            }
         } , step)
         
    }

    counter('count1' , 0 , 2000 , 100);
    counter('count2' , 0 , 4000 , 100);
    counter('count3' , 0 , 3000 , 100);
    counter('count4' , 0 , 6000 , 100);

})