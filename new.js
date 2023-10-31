let stars= document.getElementById('stars');
let moon= document.getElementById('moon');
let mountains3= document.getElementById('mountains3');
let mountains4= document.getElementById('mountains4');
let river= document.getElementById('river');
let boat= document.getElementById('boat');
let mango= document.querySelector('.mango');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3.5 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value  + 'px';
    boat.style.top = value  + 'px';
    boat.style.left = value * 3 + 'px';
    mango.style.fontSize = value + 'px';
    if(scrollY >= 64){
        mango.style.fontSize = 64 + 'px';
        mango.style.position = 'fixed';
        if(scrollY >= 435){
            mango.style.display='none';
        }else{
            mango.style.display='block';
            
        }if(scrollY >=116){
            document.querySelector('.main').style.background ='linear-gradient(rgb(74 128 163),rgb(18, 1, 82))';

        }else{
            document.querySelector('.main').style.background ='linear-gradient(rgb(61, 0, 26),rgb(18, 1, 82))';

        }
    }
}