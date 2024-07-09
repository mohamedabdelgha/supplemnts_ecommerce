//--------------------- product-window functions ---------------------------------------//
const pro_window = document.getElementById('pro-window');
const pro_close = document.getElementById('pro-close');
const pro_cards = document.querySelectorAll('.pro-card');
pro_cards.forEach(card=>{
    card.addEventListener('click',function(){
        pro_window.style.display='flex';
    })
})
pro_close.addEventListener('click',()=>{
    pro_window.style.display='none';
})