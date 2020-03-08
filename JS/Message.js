class Message {
    constructor({type='success',text=''}){
        this.type = type
        this.text = text

        this.render()
        this.bind()
    }
    render(){
        let $div = document.createElement('div')
        this.$message = $div
        $div.classList.add('message')
        $div.classList.add(this.type)
        let $icon = document.createElement('span')
        $icon.classList.add('iconfont')
        $icon.classList.add('icon-' + this.type)
        $div.appendChild($icon)
        let $text = document.createTextNode(this.text)
        $div.appendChild($text)
        document.body.appendChild($div)
    }

    bind(){
        setTimeout(()=>this.show(),0)
        setTimeout(()=>this.destory(),3000)
    }

    show(){
        this.$message.classList.add('show')
    }

    destory(){
        this.$message.classList.remove('show')
        setTimeout(()=>this.$message.parentNode.removeChild(this.$message),400)
        
    }
}
document.querySelector('#button-success').onclick = function(){
    new Message({text:'成功',type:'success'})
}
document.querySelector('#button-waring').onclick = function(){
    new Message({text:'警告',type:'waring'})
}
document.querySelector('#button-info').onclick = function(){
    new Message({text:'消息',type:'info'})
}
document.querySelector('#button-danger').onclick = function(){
    new Message({text:'危险',type:'danger'})
}