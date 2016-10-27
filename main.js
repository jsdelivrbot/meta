module.styleByPath('index.css').then(()=>{
    document.body.appendChild(createSpaceDiv())
    document.body.appendChild(createUnitDiv())
})
module.rootScript.parentNode.removeChild(module.rootScript)
function createSpaceDiv(){
    let div=document.createElement('div')
    div.style.position='absolute'
    div.style.left='50%'
    div.style.top='50%'
    div.appendChild(canvas())
    return div
    function canvas(){
        let
            canvas=document.createElement('canvas'),
            width=2048,
            height=1024
        canvas.width=width
        canvas.height=height
        canvas.style.position='absolute'
        canvas.style.left=`-${width/2}px`
        canvas.style.top=`-${height/2}px`
        let context=canvas.getContext('2d')
        context.strokeStyle='gray'
        context.beginPath()
        context.moveTo(width/2,0)
        context.lineTo(width/2,height)
        context.moveTo(0,height/2)
        context.lineTo(width,height/2)
        context.stroke()
        return canvas
    }
}
function createUnitDiv(){
    let div=document.createElement('div')
    div.style.position='absolute'
    div.style.left='50%'
    div.style.top='50%'
    div.appendChild(canvas())
    return div
    function canvas(){
        let
            canvas=document.createElement('canvas'),
            radius=16
        canvas.width=radius
        canvas.height=radius
        canvas.style.position='absolute'
        canvas.style.left=`-${radius/2}px`
        canvas.style.top=`-${radius/2}px`
        let context=canvas.getContext('2d')
        context.fillStyle='gray'
        context.beginPath()
        context.arc(radius/2,radius/2,radius/2-1,0,Math.PI*2)
        context.fill()
        return canvas
    }
}
