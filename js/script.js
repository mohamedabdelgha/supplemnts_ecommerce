    //offers slider functions -------------------------------------------------------------------------------------------------
    const cardsWraper = document.querySelector('.cardsWraper');
    const cardsCon = document.querySelector('.offers');
    const firstCardWidth = cardsCon.querySelector('.offer').offsetWidth;
    const secondCardWidth = firstCardWidth;
    const cardsConChildren = [...cardsCon.children];
    let cardPreview = Math.round(cardsCon.offsetWidth / secondCardWidth);
    let isDragging = false , startX , startScrollLeft , timeoutId;
    cardsConChildren.slice(-cardPreview).reverse().forEach(card =>{
        cardsCon.insertAdjacentHTML('afterbegin', card.outerHTML);
    })
    cardsConChildren.slice(0, cardPreview).forEach(card =>{
        cardsCon.insertAdjacentHTML('beforeend', card.outerHTML);
    })
    const dragstart = (e)=>{
        isDragging=true;
        cardsCon.classList.add('dragging');
        startX = e.pageX;
        startScrollLeft = cardsCon.scrollLeft;
    };
    const dragging = (e)=>{
        if(!isDragging) return;
        cardsCon.scrollLeft =startScrollLeft- (e.pageX - startX);
    }
    const dragstop = ()=>{
        isDragging=false;
        cardsCon.classList.remove('dragging');
    }
    const infiniteScroll =  ()=>{
        if(cardsCon.scrollLeft === 0){
            cardsCon.classList.add('notransition')
            cardsCon.scrollLeft = cardsCon.scrollWidth - (2*cardsCon.offsetWidth);
            cardsCon.classList.remove('notransition')
        }else if(Math.ceil(cardsCon.scrollLeft) === cardsCon.scrollWidth - cardsCon.offsetWidth){
            cardsCon.classList.add('notransition')
            cardsCon.scrollLeft = cardsCon.offsetWidth;
            cardsCon.classList.remove('notransition')
        }
        clearTimeout(timeoutId);
        if(!cardsWraper.matches(':hover')) autoPlay();
    }
    const autoPlay = ()=>{
        if(window.innerWidth <800) return;
        timeoutId = setTimeout(()=> cardsCon.scrollLeft += secondCardWidth,2500)
    }
    autoPlay();
    cardsCon.addEventListener( 'mousedown', dragstart );
    cardsCon.addEventListener( 'mousemove', dragging );
    document.addEventListener( 'mouseup', dragstop );
    cardsCon.addEventListener( 'scroll', infiniteScroll );
    cardsWraper.addEventListener( 'mouseenter', ()=>{clearTimeout(timeoutId);} );
    cardsWraper.addEventListener( 'mouseleave', autoPlay );
//--------------------- menubar functions ---------------------------------------//
const menubtn = document.getElementById('menubtn');
const menubtnI = document.querySelector('#menubtn i');
const menubar = document.querySelector('aside');
menubtn.addEventListener('click',function(){
    menubar.classList.toggle('active')
    menubtnI.classList.toggle('rotate')
})

//--------------------- onload functions ---------------------------------------//
window.onload=()=>{
    filters[0].classList.add('selected');
    signbtns[0].classList.add('selected');
    document.querySelector('.window-con .login').style.display='flex';
}
//--------------------- scroll functions ---------------------------------------//
window.onscroll=()=>{
    if(scrollY>0){
        document.querySelector('header').style.position='fixed'
        document.querySelector('header').style.top='0'
    }else{
        document.querySelector('header').style.position='relative'
    }
}
//--------------------- sign-window functions ---------------------------------------//
const signbtns = document.querySelectorAll('.window-con ul li');
const logWindow = document.getElementById('log-window');
for(let i =0; i<signbtns.length;i++){
    signbtns[0].addEventListener('click',function(){
        document.querySelector('.window-con .login').style.display='flex';
        document.querySelector('.window-con .signup').style.display='none';
        signbtns.forEach(btn=>{
            btn.classList.remove('selected')
        })
        this.classList.add('selected')
    })
    signbtns[1].addEventListener('click',function(){
        document.querySelector('.window-con .signup').style.display='flex';
        document.querySelector('.window-con .login').style.display='none';
        signbtns.forEach(btn=>{
            btn.classList.remove('selected')
        })
        this.classList.add('selected')
    })
}
document.getElementById('close-window').addEventListener('click',()=>{
    logWindow.style.display='none';
})
document.getElementById('user-account').addEventListener('click',()=>{
    logWindow.style.display='flex';
})
document.getElementById('login-btn').addEventListener('click',()=>{
    logWindow.style.display='flex';
    signbtns[0].classList.add('selected');
    signbtns[1].classList.remove('selected');
    document.querySelector('.window-con .login').style.display='flex';
    document.querySelector('.window-con .signup').style.display='none';
})
document.getElementById('signup-btn').addEventListener('click',()=>{
    logWindow.style.display='flex';
    signbtns[0].classList.remove('selected');
    signbtns[1].classList.add('selected');
    document.querySelector('.window-con .signup').style.display='flex';
    document.querySelector('.window-con .login').style.display='none';
})

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
//--------------------- products-page functions ---------------------------------------//
const productsDivs = document.querySelectorAll('.image-con');
productsDivs.forEach(productsDiv=>{
    productsDiv.addEventListener('click',function(){
        window.location.href='products.html';
        const category = productsDiv.querySelector('.image-con h3').innerHTML
        localStorage.setItem('category', category);
        console.log(category)
    })
})