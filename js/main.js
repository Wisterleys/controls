$(".btn-control").forEach(btn => {
    btn.on("touchstart mousedown",e=>{
        $("#draw").innerText+=e.target.id
    })
    btn.on("touchend mouseup",e=>{
        $("#draw").innerText+=e.target.id+" -"
    })
});