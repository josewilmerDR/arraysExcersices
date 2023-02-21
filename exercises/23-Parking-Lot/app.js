

let parking_state = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(parking_state) {
  let totalSlots = 0;
  let availableSlots = 0;
  let occupiedSlots = 0;
  for (let i = 0; i < parking_state.length; i++) {
    for (let j = 0; j < parking_state[i].length; j++) {
      if (parking_state[i][j] === 0) continue;
      if (parking_state[i][j] === 1 || parking_state[i][j] === 2) {
        totalSlots++
      }
      if(parking_state[i][j] === 1) {
        occupiedSlots++
      } else {
        availableSlots++
      }
    }
  }
  return {totalSlots, availableSlots, occupiedSlots }
}
// function getParkingLotState(parking_state) {
//   let totalSlots = 0;
//   let availableSlots = 0;
//   let occupiedSlots = 0;
//   for (let i = 0; i < parking_state.length; i++) {
//     for (let j = 0; j < parking_state[i].length; j++) {
//       if (parking_state[i][j] === 1 || parking_state[i][j] === 2) {
//         totalSlots++;
//         if (parking_state[i][j] === 2) {
//           availableSlots++;
//         } else {
//           occupiedSlots++;
//         }
//       }
//     }
//   }
//   return { totalSlots, availableSlots, occupiedSlots };
// }

console.log(getParkingLotState(parking_state))