const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const $pre = $('.carousel .arrow-pre')
const $next = $('.carousel .arrow-next')
const $$indicators = $$('.carousel .indicators>li')
const $$panels = $$('.carousel .panels>a')

const getIndex = () => [...$$indicators].indexOf($('.carousel .indicators .active'))
const getPreIndex = () => (getIndex() - 1 + $$indicators.length) %  $$indicators.length
const getNextIndex = () =>(getIndex() + 1) %  $$indicators.length


const setPage = index => {
    $$panels.forEach($panels => $panels.classList.remove('active'))
    $$panels[index].classList.add('active')
}


const setIndicator = index => {
    $$indicators.forEach($indicators => $indicators.classList.remove('active'))
    $$indicators[index].classList.add('active')
}

$pre.onclick = function(){
    let index = getPreIndex()
    setPage(index)
    setIndicator(index)
}

$next.onclick = function(){
    let index = getNextIndex()
    setPage(index)
    setIndicator(index)
}

$$indicators.forEach($indicators =>$indicators.onclick = function(e){
    let index = [...$$indicators].indexOf(e.target)
    setIndicator(index)
    setPage(index)
})


//当点击左pre展示上一页面板 设置indicator
//当点击右next展示下一页  设置indicator
//当点击indicator展示第n页 设置indicator