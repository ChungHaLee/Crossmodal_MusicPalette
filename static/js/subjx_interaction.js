import subjx from "subjx";
// import "subjx/dist/style/subjx.css";
// 도형 버튼을 클릭하면 나온 div 도형에 subjx drag 를 적용시켜야함
// eventlistener of button >>>> subjx drag of div (클릭하면 클릭 수대로 도형이 각각 움직여야함)


const circleButton = document.getElementById('btn-circle');
let circleShape = document.getElementsByClassName("circleDraggable");



// for 문 사용하기?
circleButton.addEventListener('click', function () {
    let numberofCircle = circleShape.length;
    console.log('number of circle', numberofCircle);
    for (let i = 0; i < numberofCircle; i++) {
        let id = '#' + String(i);
        console.log('id', id);
        console.log('type of id', typeOf(id));
        const circle = subjx( id ); // 여기가 안됨
        circle.setAttribute("id", i); // id
        circle.drag();
    }
});



// const circle = subjx( ".circleDraggable" );

// console.log('circle', circle);


// circle.drag();



// circle.drag({
//     onInit(elements) {
//         console.log('onInit!');
//     },
//     onMove({ clientX, clientY, dx, dy, transform }) {
//         console.log('onMove!');
//     },
//     onResize({ clientX, clientY, dx, dy, transform, width, height }) {
//         console.log('onResize!');
//     },
//     onRotate({ clientX, clientY, delta, transform }) {
//         console.log('onRotate!');
//     },
//     onDrop({ clientX, clientY }) {
//         console.log('onDrop!');
//     },
//     onDestroy(el) {
//         console.log('onDestory!');
//     }
// });

