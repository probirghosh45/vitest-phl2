export function add(numbers){
    // let sum;
    let sum = 0;

    for (const number of numbers) {
        sum += +number; // +number means converted to number
    }
    return sum;
}