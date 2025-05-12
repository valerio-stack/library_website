function show(value) {
    console.log(value)
}

let chelsea = {
    gk: [
      { full_name: "Robert Sanchez", age: 27, match: 25, clean_sheet: 7 },
      { full_name: "Filip Jorgensen", age: 22, match: 6, clean_sheet: 1 }
    ],
  
    cb: [
      { full_name: "Levi Colwill", age: 22, match: 28, goal: 1, assist: 1, yellow_card: 7 },
      { full_name: "Wesley Fofana", age: 24, match: 14, goal: 0, assist: 0, yellow_card: 7 }
    ],
  
    rb: [
      { full_name: "Reece James", age: 25, match: 9, goal: 1, assist: 0, yellow_card: 1 },
      { full_name: "Malo Gusto", age: 21, match: 22, goal: 0, assist: 6, yellow_card: 4 }
    ],
  
    lb: [
      { full_name: "Marc Cucurella", age: 26, match: 20, goal: 4, assist: 2, yellow_card: 3 }
    ],
  
    cm: [
      { full_name: "Moises Caicedo", age: 23, match: 29, goal: 0, assist: 1, yellow_card: 6 },
      { full_name: "Enzo Fernandez", age: 23, match: 24, goal: 2, assist: 2, yellow_card: 5 }
    ],
  
    cam: [
      { full_name: "Cole Palmer", age: 22, match: 30, goal: 16, assist: 9, yellow_card: 3 }
    ],
  
    lw: [
      { full_name: "Jadon Sancho", age: 24, match: 21, goal: 2, assist: 5, yellow_card: 1 },
      { full_name: "Tyrique George", age: 18, match: 5, goal: 0, assist: 0, yellow_card: 0 }
    ],
  
    rw: [
      { full_name: "Noni Madueke", age: 23, match: 18, goal: 4, assist: 1, yellow_card: 2 },
      { full_name: "Pedro Neto", age: 25, match: 28, goal: 3, assist: 4, yellow_card: 1 }
    ],
  
    st: [
      { full_name: "Nicolas Jackson", age: 23, match: 29, goal: 10, assist: 4, yellow_card: 6 },
      { full_name: "Christopher Nkunku", age: 27, match: 5, goal: 1, assist: 0, yellow_card: 0 }
    ]
  };

let player_names = []

for (position_key in chelsea) {
    for (let i = 0; i < chelsea[position_key].length; i++) {
        show(chelsea[position_key][i]['full_name'])
        player_names.push(chelsea[position_key][i]['full_name'])
    }
}



// // let products = ['flour', 'egg', 'melon', 'broccoli', 'banana', 'egg', 'egg', 'baking_soda', 'corn', 'egg', 'apple']

// // egg_count = 0
// // for (let i = 0; i < products.length; i++) {
// //     if (products[i] == 'egg') {
// //         egg_count += 1
// //         products[i] = `egg${egg_count}`
// //     } 
// // }

// // for (let x = 1; x < egg_count + 1; x++) {
// //     let current_egg_index = products.indexOf(`egg${x}`)
// //     products.splice(current_egg_index, 1)

// // }

// // console.log(products)