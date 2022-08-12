export function sum(...nums: any[]): number {
    return nums.reduce((a, b) => a + b)
}
export function getTriangleType(a: number, b: number, c: number): string {
    if (a === b && b === c) return '10'
    else if (a > b + c) return '00'
    else if (a !== b && b !== c && a !== c ) return '11'
    else return '01' //(a === b || b === c || a === c)
}
export function getSum(number: number): number {
    return String(number)
        .split('')
        .map(el=> Number(el))
        .reduce((a, b)=> a + b)
}
export function isEvenIndexSumGreater(arr: number[]): boolean {
    let even = [...arr].filter((el, i)=> i % 2 === 0).reduce((a,b)=> a + b);
    let odd = [...arr].filter((el, i)=> i % 2 !== 0).reduce((a,b)=> a + b);
    return even > odd
}
export function isSquareGreater(areaCr: number, areaSq: number): boolean {
    return areaCr / areaSq <= Math.PI / 4
}
export function getBanknoteList(amountOfMoney: number): number[] {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    let res = [];
    for (let i = 0; i < banknotes.length; i++) {
        let note = banknotes[i]
        while (amountOfMoney - note >= 0) {
            amountOfMoney -= note
            res.push(note)
        }
    }
    return res;
}