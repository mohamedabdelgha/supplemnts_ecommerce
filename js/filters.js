//--------------------- filters functions ---------------------------------------//
const filters = document.querySelectorAll('.filters span');
for(let i=0;i<filters.length;i++){
    filters[i].addEventListener('click', function(){
        filters.forEach(filter=>{
            filter.classList.remove('selected');
        })
        this.classList.add('selected');
    })
}