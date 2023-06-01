const characteristic = ['smile','personality','joy', 'spirit','aura','patience','countenance','passion','loyalty']
const state = ['success','happiness','divinity','enlightenment','nirvana','bliss','serenity','peace']

function generateFortune(arr1, arr2) {
    let randChar = Math.floor(Math.random()*arr1.length)
    let randState = Math.floor(Math.random()*arr2.length)
    console.log(`Your ${arr1[randChar]} pushes others on to ${arr2[randState]}`)
}

generateFortune(characteristic, state)