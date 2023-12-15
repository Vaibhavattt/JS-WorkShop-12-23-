// function demo(variable1) {

//     if (variable1 < 0) {
//         console.log('Number is Negative--')
//     } else {
//         console.log('Number is Positive++')
//     }
// }

// demo(-1)

let s = 1;

function demo1(variable2) {

    while (variable2 > 0) { //5>=0

        s = s * variable2;
        --variable2;
    }

    console.log(s)

}
demo1(5)