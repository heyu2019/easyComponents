const $ =s =>document.querySelector(s)
    const $$ = s =>document.querySelectorAll(s)
    
    const $tabitems = $$('.tabs .tab-items')
    const $$panel = $$('.tabs .tab-panel')
    const $line = $('.tabs .line')

    $line.style.width = $tabitems[0].offsetWidth + 'px'
    $tabitems.forEach($tab => {
        $tab.onclick = function(){
            $tabitems.forEach($tab => $tab.classList.remove('active'))
            this.classList.add('active')

            $line.style.width = this.offsetWidth + 'px'
            $line.style.transform = `translateX(${this.offsetLeft}px)`
            let index = [... $tabitems].indexOf(this)
            $$panel.forEach($panel => $panel.classList.remove('active'))
            $$panel[index].classList.add('active')
        }
    });