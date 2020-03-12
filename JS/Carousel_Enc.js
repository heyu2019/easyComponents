class Carousel {
    constructor($root) {
        this.$root = $root
        this.$pre = $root.querySelector('.arrow-pre')
        this.$next = $root.querySelector('.arrow-next')
        this.$$indicators = $root.querySelectorAll('.indicators>li')
        this.$$panels = $root.querySelectorAll('.panels>a')

        this.bind()
    }

    bind() {
        let self = this
        this.$pre.onclick = () => {
            let index = this.getPreIndex().bind()
            this.setPage(index)
            this.setIndicator(index)
        }

        this.$next.onclick =  () => {
            let index = this.getNextIndex()
            this.setPage(index)
            this.setIndicator(index)
        }

        this.$$indicators.forEach($indicators => $indicators.onclick =  (e) => {
            let index = [...this.$$indicators].indexOf(e.target)
            this.setIndicator(index)
            this.setPage(index)
        })
    }

    getIndex() {
        return [...this.$$indicators].indexOf(this.$root.querySelector('.indicators .active'))
    }

    getPreIndex() {
        return (this.getIndex() - 1 + this.$$indicators.length) % this.$$indicators.length
    }

    getNextIndex() {
        return (this.getIndex() + 1) % this.$$indicators.length
    }

    setPage(index) {
        this.$$panels.forEach($panels => $panels.classList.remove('active'))
        this.$$panels[index].classList.add('active')
    }

    setIndicator(index) {
        this.$$indicators.forEach($indicators => $indicators.classList.remove('active'))
        this.$$indicators[index].classList.add('active')
    }
}
//多个轮播情况下使用下面代码
/**let $$Carousel = document.querySelectorAll('.carousel')
$$Carousel.forEach($root => new Carousel($root))**/

let $Carousel = document.querySelector('.carousel')
new Carousel($Carousel)



//当点击左pre展示上一页面板 设置indicator
//当点击右next展示下一页  设置indicator
//当点击indicator展示第n页 设置indicator