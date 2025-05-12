
const notification_book_added = document.querySelector(".notification_book_added");
const add_book_button_library = document.querySelectorAll(".plus_button_container3");
const plus_icon = document.querySelectorAll('.plus_button_container3');

let is_added = false
let book_clicked = 0
let is_animating = false

add_book_button_library.forEach((each, each_index) => {
    each.addEventListener('mouseenter', () => {
        if (getComputedStyle(each).backgroundColor != "rgb(125, 125, 125)") {
            each.style.filter = "brightness(80%)"
            each.style.cursor = 'pointer';
        }
    })

    each.addEventListener('mouseleave', () => {
        if (getComputedStyle(each).backgroundColor != "rgb(125, 125, 125)") {
            each.style.filter = "brightness(100%)"
        }
    })

    each.addEventListener('mousedown', () => {
        if (getComputedStyle(each).backgroundColor != "rgb(125, 125, 125)") {
            each.style.filter = "brightness(110%)"
        }
    })

    each.addEventListener('click',() => {
        if (getComputedStyle(each).backgroundColor != "rgb(125, 125, 125)") {
            book_clicked++
            animate_or_not()
            plus_button_logic(each)
        }
        
    });
})

//semakin cepat tombol lain diklik, semakin cepat animasi berakhir
//semakin lama tombol lain diklik, semakin lama animasi berakhir
//jadi animasi sebenarnya sudah dimulai semenjak tombol diklik, tapi baru kelihatan setelah animasi sblmnya selesai


/* ----------------------------functions-------------------------------------------- */

function animate_notification() {
    return new Promise ((resolve) => {
        notification_book_added.style.animation = "show_notification 0.4s ease-in-out"
        notification_book_added.style.left = "0px"
        is_animating = true

        setTimeout(() => {
            notification_book_added.style.left = "-230px"
            notification_book_added.style.animation = "hide_notification 0.4s ease-in-out"
            
            setTimeout(() => {
                book_clicked--
                is_animating = false
                console.log(book_clicked, is_animating)
                resolve()
            }, 400);
        }, 4000)
    })
}


function animate_or_not() {
    if (book_clicked <= 0) {
        return;
    }

    if (book_clicked > 0 && is_animating === false) {
        animate_notification().then(() => {animate_or_not()})
    }
}



function plus_button_logic(param) {
    param.style.cursor = 'auto';
    param.querySelector('i').style.color = "rgb(150, 149, 149)";
    param.style.backgroundColor = "rgb(125, 125, 125)";
    param.removeAttribute('title');
}
