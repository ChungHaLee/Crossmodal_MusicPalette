import Moveable from "moveable";

const moveable = new Moveable(document.body, {
    target: document.querySelector("#circle"),
    // If the container is null, the position is fixed. (default: parentElement(document.body))
    container: document.body,
    draggable: true,
    resizable: true,
    scalable: true,
    rotatable: true,
    warpable: true,
    // Enabling pinchable lets you use events that
    // can be used in draggable, resizable, scalable, and rotateable.
    pinchable: true, // ["resizable", "scalable", "rotatable"]
    origin: true,
    keepRatio: true,
    // Resize, Scale Events at edges.
    edge: false,
    throttleDrag: 0,
    throttleResize: 0,
    throttleScale: 0,
    throttleRotate: 0,
});

/* resizable */
moveable.on("resizeStart", ({ target, clientX, clientY }) => {
    console.log("onResizeStart", target);
}).on("resize", ({ target, width, height, dist, delta, clientX, clientY }) => {
    console.log("onResize", target);
    delta[0] && (target.style.width = `${width}px`);
    delta[1] && (target.style.height = `${height}px`);
}).on("resizeEnd", ({ target, isDrag, clientX, clientY }) => {
    console.log("onResizeEnd", target, isDrag);
});