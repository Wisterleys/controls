$(".btn-control").forEach(btn => {
    btn.on("click",e=>{
        console.log(e.target.getStyle("background-color"))
    })
});