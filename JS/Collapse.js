class collapse{
    constructor($contanir,type=1){
        this.$contanir = $contanir
        this.$$collapseitem = $contanir.querySelectorAll('.collapse-header')
        this.type = type
        this.bind()
    }
    bind(){
        let self = this
        this.$$collapseitem.forEach($item => {
            $item.onclick = function(){
                if(self.type === 2){
                    this.classList.toggle('active')
                }else if(self.type === 1){
                    self.$$collapseitem.forEach($item => $item.classList.remove('active'))
                    this.classList.add('active')
                }
            }
        })
    }
}
new collapse(document.querySelectorAll('.collapse')[0],1)
new collapse(document.querySelectorAll('.collapse')[1],2)