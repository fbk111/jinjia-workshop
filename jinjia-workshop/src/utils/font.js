(function(doc,win){
    var reCreateStyle=function(){
        let style;
        if(style=document.getElementById('forhtml')){
            style.parentNode.removeChild(style)
        }

        style=document.createElement('style')
        style.id='forhtml'
        let head=document.head||document.getElementsByTagName('head')[0]
        head.appendChild(style)
        let fontSize=100.00*(parseFloat(document.documentElement.clientWidth,10))/375.00
        style.appendChild(document.createTextNode("html{font-size:"+fontSize+"px !important;}"))

    }

    let docEl=doc.documentElement,
            resizeEvt='orientationchange' in window ? 'orientationchange':'resize',
            recalc=function(){
                reCreateStyle()
            },
            loadcalc=function(){
                reCreateStyle()
                let bodyEl=document.body
                if(bodyEl.classList.contains('loading')){
                    bodyEl.classList.remove('loading')
                }
            }
            recalc()
            if(!doc.addEventListener) return
            window.addEventListener(resizeEvt,loadcalc,false)
            doc.addEventListener('DOMContentLoaded',loadcalc,false)
})(document,window)