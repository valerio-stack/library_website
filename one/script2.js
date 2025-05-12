// game_buttons.forEach(function(button) {
//     button.addEventListener('click', function() {
//         button_value = button.textContent.toLowerCase()
//         console.log(button_value)
//     })
// })

const title = document.querySelector('h2')
const flying_text = document.getElementById('flying_text')
const button_container = document.getElementById('button_container')
const textbox = document.getElementById('textbox')
const game_buttons = document.querySelectorAll('.game_button')
const rock_button = document.getElementById('rock_button')
const paper_button = document.getElementById('paper_button')
const scissor_button = document.getElementById('scissor_button')
const result_text_container = document.getElementById('result_text_container')


let win_count = Number(localStorage.getItem('win_count')) ?? 0
let lose_count = Number(localStorage.getItem('lose_count')) ?? 0
let draw_count = Number(localStorage.getItem('draw_count')) ?? 0
let win_percentage = localStorage.getItem('win_percentage') ?? 0
let user_pick;

const rules = {
    scissor: {
        rock: "lose",
        scissor: "draw",
        paper: "win"
    },
    paper: {
        rock: "win",
        paper: "draw",
        scissor: "lose"
    },
    rock: {
        rock: "draw",
        paper: "lose",
        scissor: "win"
    }
};


addEventListener('keyup', function() {
    if (event.key == "f" || event.key == "F") {
        flying_text.style.animation = 'fade 0.7s'
        flying_text.style.display = 'none'

        button_container.style.animation = "fade 0.7s"
        title.style.animation = "fade 0.7s"

        setTimeout(() => {
            title.style.animation = "appear 0.7s"
            textbox.style.animation = "appear 0.7s"
            textbox.style.display = "inline-block"
            button_container.style.display = "none"
            title.textContent = "Rock, Paper, or Scissor?"
        }, 700);
}
    else if (event.key == "q" || event.key == "Q") {
        flying_text.style.animation = 'fade 0.7s'
        flying_text.style.display = 'none'
    }

    else if (event.key == 'F1') {
        for (let i = 0; i < localStorage.length; i++) {
            localStorage.setItem(localStorage.key(i), 0)
        }
        win_count = 0
        lose_count = 0
        draw_count = 0
        win_percentage = 0
    }    


    else if (event.key == "A" || event.key == "a"){
        
    }}
)


function animate_result_text() {
    result_text_container.style.animation = "move_down2 0.6s"
    result_text_container.childNodes[1].style.animation = "appear2 0.6s"
    result_text_container.style.top = "52px"
}


console.log(localStorage)

rock_button.onclick = () => {
    get_result("rock")
    animate_result_text()
}
paper_button.onclick = () => {
    get_result("paper")
    animate_result_text()
}
scissor_button.onclick = () => {
    get_result("scissor")
    animate_result_text()
}


setInterval(auto_play(), 1000)

function auto_play() {
    statement = `You picked ${com_pick_value()}, com picked ${com_pick_value2}, you ${rules[com_pick_value()][com_pick_value2()]}`
        if (statement.includes('lose')) {
            console.log('you lose')
        } else if (statement.includes('draw')) {
            console.log('its a draw')
        } else {
            console.log('you win')
        }
}


function get_result(user_pick) {
    const com_pick = com_pick_value();
    let statement = `You pick ${user_pick}, computer pick ${com_pick}, you ${rules[user_pick][com_pick]}`;

    if (statement.includes("draw")) {
        statement = `You pick ${user_pick}, computer pick ${com_pick}, it's a ${rules[user_pick][com_pick]}`;
    };

    const stats = get_stats(statement)
    console.log(stats)
    localStorage.setItem("win_count", stats[0])
    localStorage.setItem("lose_count", stats[1])
    localStorage.setItem("draw_count", stats[2])
    localStorage.setItem("win_percentage", `${stats[3]}%`)
    result_text_container.childNodes[1].textContent = statement
}


function com_pick_value() {
    let com_pick;
    let com_pick_number = Math.floor(Math.random() * (3-1+1) + 1);
    if (com_pick_number === 1) {
        return com_pick = "rock";
    } else if (com_pick_number === 2) {
        return com_pick = "paper";
    } else if (com_pick_number === 3) {
        return com_pick = "scissor";
    }
};

function com_pick_value2() {
    let com_pick;
    let com_pick_number = Math.floor(Math.random() * (3-1+1) + 1);
    if (com_pick_number === 1) {
        return com_pick = "rock";
    } else if (com_pick_number === 2) {
        return com_pick = "paper";
    } else if (com_pick_number === 3) {
        return com_pick = "scissor";
    }
};


function get_stats(statement) {
    if (statement.includes("win")) {
        win_count += 1;
    } else if (statement.includes("lose")) {
        lose_count += 1;
    } else if (statement.includes('draw')) {
        draw_count += 1;
    };

    if(win_count > 0) {win_percentage = win_count/(win_count + draw_count + lose_count) * 100}
    
    return [win_count, draw_count, lose_count, Number(win_percentage.toPrecision(2))]
}
