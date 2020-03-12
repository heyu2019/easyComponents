class Dialog {
    constructor($root,options = {}){
        this.$root = $root
        this.options = options
        this.onCancel = options.onCancel || function(){}
        this.onOk = options.onOk || function(){}

        this.bind()
    }

    bind(){
        let self = this
        this.$root.querySelector('.close').onclick = function(){
            self.hide()
        },
        this.$root.querySelector('.btn-cancel').onclick = function(){
            self.hide()
            self.onCancel()
        },
        this.$root.querySelector('.btn-ok').onclick = function(){
            self.hide()
            self.onOk()
        }
    }

    hide(){
        this.$root.classList.remove('apper')
        setTimeout(() => this.$root.classList.remove('show'),400)
    }

    show(){
        this.$root.classList.add('show')
        setTimeout(() => this.$root.classList.add('apper')) 
    }

}
let dialog = new Dialog(document.querySelector('.dialog'),{
    onOk(){
        console.log('用户点了ok')
    },
    onCancel(){
        console.log('用户点了推出')
    }
})
document.querySelector('.open-dialog').onclick = function(){
    dialog.show()
}