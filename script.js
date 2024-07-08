    //portofolio slider functions -------------------------------------------------------------------------------------------------
    const cardsWraper = document.querySelector('.cardsWraper');
    const cardsCon = document.querySelector('.offers');
    const firstCardWidth = cardsCon.querySelector('.offer').offsetWidth;
    console.log(firstCardWidth)
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
