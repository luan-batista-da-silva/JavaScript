let num = [15, 26, 2, 1, 3, 39]

for (let pos = 0; pos < num.length; pos++) {
    console.log(`Pos ${pos} = ${num[pos]}`)
}
console.log('\n')
num.sort()

for (let pos = 0; pos < num.length; pos++) {
    console.log(`Pos ${pos} = ${num[pos]}`)
}