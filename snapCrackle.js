function snapCrackle(maxValue){

    let texto = ''

    for(let i = 1; i <= maxValue; i++){

        if(i % 2 != 0 && i % 5 == 0){

            texto += `SnapCrackle, `

        }else if(i % 2 != 0){

            texto += 'Snap, '

        }else if(i % 5 == 0){ 

            texto += 'Crackle, '

        }else{

            texto += `${i}, `

        }

    }
    
    return texto
}


let result = snapCrackle(12)
console.log(result)