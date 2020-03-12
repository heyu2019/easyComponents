const css = ($node, cssObj) => Object.assign($node.style, cssObj)

const Animation = {
    slide($from, $to, direction) {
        $from.style = ''
        $to.style = ''
        css($from, {
            transform: `translateX(0)`,
            zIndex:10
        })
        css($to, {
            transform: `translateX(${direction === 'right' ? '-':''}100%)`,
            zIndex:10
        })

        setTimeout(() => {
            css($from, {
                transform: `translateX(${direction === 'left' ? '-':''}100%)`,
                transition: `all .4s`
            })
            css($to, {
                transform: `translateX(0)`,
                transition: `all .4s`
            })
        })
    },
    //渐变
    fade($from, $to) {
        $from.style = ''
        $to.style = ''
        css($from, {
            opacity: 1,
            zIndex:10
        })
        css($to, {
            opacity: 0,
            zIndex:9
        })

        setTimeout(() => {
            css($from, {
                opacity: 0,
                zIndex:10,
                transition: `all .4s`
            })
            css($to, {
                opacity: 1,
                zIndex:9,
                transition: `all .4s`
            })
        })
        setTimeout(() => {
            css($from, {
                zIndex:9,
            })
            css($to, {
                zIndex:10,
            },400)
        })

    },
    //变大
    zoom($from, $to) {
        $from.style = ''
        $to.style = ''
        css($from, {
            transform:`scale(1)`,
            opacity: 1,
            zIndex:10
        })
        css($to, {
            transform:`scale(10)`,
            opacity: 0,
            zIndex:9
        })

        setTimeout(() => {
            css($from, {
                transform:`scale(10)`,
                opacity: 0,
                zIndex:10,
                transition: `all .4s`
            })
            css($to, {
                transform:`scale(1)`,
                opacity: 1,
                zIndex:9,
                transition: `all .4s`
            })
        })
        setTimeout(() => {
            css($from, {
                zIndex:9,
            })
            css($to, {
                zIndex:10,
            },400)
        })

    }
}
class Carousel {
    constructor($root, animation) {
        this.$root = $root
        this.$pre = $root.querySelector('.arrow-pre')
        this.$next = $root.querySelector('.arrow-next')
        this.$$indicators = $root.querySelectorAll('.indicators>li')
        this.$$panels = $root.querySelectorAll('.panels>a')
        this.animation = animation

        this.bind()
    }

    bind() {
        let self = this
        this.$pre.onclick = () => {
            let fromIndex = this.getIndex()
            let toIndex = this.getPreIndex()
            this.setPage(fromIndex, toIndex, 'right')
            this.setIndicator(toIndex)
        }

        this.$next.onclick = () => {
            let fromIndex = this.getIndex()
            let toIndex = this.getNextIndex()
            this.setPage(fromIndex, toIndex, 'left')
            this.setIndicator(toIndex)
        }

        this.$$indicators.forEach($indicators => $indicators.onclick = (e) => {
            let fromIndex = this.getIndex()
            let toIndex = [...this.$$indicators].indexOf(e.target)
            let direction = fromIndex > toIndex ? 'right' : 'left'
            this.setPage(fromIndex, toIndex, direction)
            this.setIndicator(toIndex)
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

    setPage(fromIndex, toIndex, direction) {
        this.animation(this.$$panels[fromIndex], this.$$panels[toIndex], direction)
    }

    setIndicator(index) {
        this.$$indicators.forEach($indicators => $indicators.classList.remove('active'))
        this.$$indicators[index].classList.add('active')
    }

    setAnimation(animation){
        this.animation = animation
    }
}
//多个轮播情况下使用下面代码
/**let $$Carousel = document.querySelectorAll('.carousel')
$$Carousel.forEach($root => new Carousel($root))**/

let $Carousel = document.querySelector('.carousel')
let carousel = new Carousel($Carousel, Animation.slide)

document.querySelector('#animation-select').onchange = function(){
    carousel.setAnimation(Animation[this.value])
}



//当点击左pre展示上一页面板 设置indicator
//当点击右next展示下一页  设置indicator
//当点击indicator展示第n页 设置indicator