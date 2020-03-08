class Tabs {
    constructor($contanir) {
        this.$contanir = $contanir
        this.$$tabitems =$contanir.querySelectorAll('.tab-items')
        this.$$panel = $contanir.querySelectorAll('.tab-panel')
        this.$line = $contanir.querySelector('.line')

        this.init()
        this.bind()
    }

    init() {
        this.$line.style.width = this.$$tabitems[0].offsetWidth + 'px'
    }

    bind() {
        let self = this
        this.$$tabitems.forEach($tab => {
            $tab.onclick = function () {
                self.$$tabitems.forEach($tab => $tab.classList.remove('active'))
                this.classList.add('active')

                self.$line.style.width = this.offsetWidth + 'px'
                self.$line.style.transform = `translateX(${this.offsetLeft}px)`
                let index = [...self.$$tabitems].indexOf(this)
                self.$$panel.forEach($panel => $panel.classList.remove('active'))
                self.$$panel[index].classList.add('active')
            }
        })
    }
}
document.querySelectorAll('.tabs').forEach($contanir => new Tabs($contanir))