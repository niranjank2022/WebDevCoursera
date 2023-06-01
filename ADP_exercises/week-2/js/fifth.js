// // let data = {};

// // document.querySelector('form').addEventListener('submit', (e) => {
// //     e.preventDefault()
// //     data = Object.fromEntries(new FormData(e.target).entries());
// //     const keys = Object.keys(data);
// //     keys.forEach((key) => {
// //         console.log("!" + key + " " + data[key])});

// //     document.write(
// //         `
        
// //         `
// //     )
// //   });

// function myFunc() {

//     var x = document.getElementById("myForm").elements.item(0).value;
//     console.log(x);
//     console.log("Hello world!")
// }

// document.querySelector('form').addEventListener('submit', myFunc());

document.getElementById("myForm").addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(document.querySelector("form").elements.item);
} );