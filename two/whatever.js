const text_input = document.getElementById('text_input');
const date_input = document.getElementById('date_button');
const button_add = document.getElementById('button_add');
text_input_criteria = false
date_input_criteria = false

let todo_dict = {
    activity: [],
    date_due: []
}

let todo_dict_json;


/* ------------------------------turn/off button------------------------------- */


text_input.addEventListener('keyup', function() {
    if (text_input.value.length >= 4) {
        text_input_criteria = true
    }

    if (text_input.value.length < 4) {
        text_input_criteria = false
    }

    check_criteria()
})

date_input.addEventListener('change', () => {
    if (Number(date_input.value.slice(0,4)) < 2029 && Number(date_input.value.slice(0,4)) > 2024) {
        date_input_criteria = true
    }

    if (Number(date_input.value.slice(0,4)) > 2029 || Number(date_input.value.slice(0,4)) < 2025) {
        date_input_criteria = false
    }

    check_criteria()
})



function check_criteria() {
    if (text_input_criteria && date_input_criteria) {
        button_add.style.backgroundColor = "white"
        button_add.addEventListener('mouseover', button_animation())
    }

    else {
        button_add.style.backgroundColor = ""
    }
}



function button_animation() {
    button_add.addEventListener('mouseover', function() {
        button_add.style.filter = 'brightness(85%)'
        button_add.style.cursor = 'pointer'
    })

    button_add.addEventListener('mouseleave', function () {
        button_add.style.filter = 'brightness(100%)'
        button_add.style.cursor = 'auto'
    })

    button_add.addEventListener('mousedown', function() {
        button_add.style.filter = "brightness(120%)"
    })

    button_add.addEventListener('mouseup', function() {
        button_add.style.filter = 'brightness(85%)'
        button_add.style.cursor = 'pointer'
    })
}

/* -------------------------------add new activity-------------------------------- */


button_add.addEventListener('click', function() {
    if (date_input_criteria && text_input_criteria) {
        let list_wrapper = document.createElement('div')
        list_wrapper.classList.add('list_wrapper')
        list_wrapper.innerHTML = `
                        <div class="list_name"></div>
                        <div class="list_date"></div>
                        <button class="list_button">Delete</button>
                        `
        let todo_list_name = list_wrapper.children[0]
        let todo_list_date = list_wrapper.children[1]
        let todo_list_button = list_wrapper.children[2]
        document.getElementById('list_container').append(list_wrapper)

        todo_list_name.textContent = text_input.value
        todo_list_date.textContent = convert_date_dmy(date_input.value)

        todo_dict.activity.push(text_input.value)
        todo_dict.date_due.push(convert_date_dmy(date_input.value))
        todo_dict_json = JSON.stringify(todo_dict)
        
        localStorage.setItem('activity', todo_dict.activity)
        localStorage.setItem('date_due', todo_dict.date_due)        

        date_input.value = ''
        date_input_criteria = false
        text_input.value = ''
        text_input_criteria = false
        check_criteria()

    
        /* --------------------------------------------------------------------------- */

        todo_list_button.addEventListener('click', function() {
            list_wrapper.remove()
        })

    }
})

function convert_date_dmy(date) {
    let day = date.slice(8,10)
    let month = date.slice(5,7)
    let year = date.slice(0,4)

    let full_date = `${day}-${month}-${year}`
    return full_date
}

