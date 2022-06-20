// Rating the article
let lis = document.querySelectorAll('main #rate ul li')

let changeSelected = (node:Element)=>()=>{
    console.log(node)
    let previouslySelected = document.querySelector('main #rate ul li.selected')
    if(previouslySelected){
        previouslySelected.classList.remove('selected')
    }
    node.classList.add('selected')
}

for (let index = 0; index < lis.length; index++) {
    let li = lis[index];
    li.addEventListener('click',changeSelected(li))
}


// Validating the rate
let submit = document.querySelector('main #rate button')

let validate = (e:Event)=>{
    e.preventDefault
    let rateSelected = document.querySelector('main #rate ul li.selected')
    if(rateSelected){
        let rate : string = rateSelected.innerHTML
        let rateSection = document.querySelector('main section#rate')
        let thankSection = document.querySelector('main section#thank')
        if(rateSection){
            rateSection.classList.remove('show')
            rateSection.classList.add('hiding')
            window.setTimeout(()=>{
                rateSection.classList.remove('hiding')
                rateSection.classList.add('hide')
                
                thankSection.classList.remove('hide')
                thankSection.classList.add('show')
                thankSection.querySelector('span.rate').innerHTML = rate
            },1400)
        }
    }else{
        window.alert('Please rate the article first.')
    }
}

submit.addEventListener('click',validate)

