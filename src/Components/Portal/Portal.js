// import { useEffect } from "react";
// import reactDom from "react-dom";

// const Portal = ({ children , inputRef : { current } }) => {
//     useEffect(() => {
//         const instance = document.getElementById("datePickerPortal").style;
//         if(current) {
//             console.log(current.getClientRects());
//             const { left , height ,top } = current.getClientRects()[0]
//             instance.position = 'absolute';
//             instance.background = 'red';
//             instance.top = `${top - height}px`;
//             instance.left= `${left}px`;
//         }
//         window.addEventListener("resize", () => {
//             if(current) {
//                 const { left ,height , top } = current.getClientRects()[0]
//                 instance.position = 'absolute';
//                 instance.background = 'red';
//                 instance.top = `${top - height}px`;
//                 instance.left= `${left}px`;
//             }
//             console.log('inside resize');
//         })
//         return () => window.removeEventListener('resize' , e => {});
//     } , [current])
//     return reactDom.createPortal(children , document.getElementById("datePickerPortal"))
// }


// export default Portal;

