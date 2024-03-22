function snapCracklePrimo (num){

    for(let i = 2; i < num; i++){
        
        if(num % i == 0){
            return false
        }
    
    }
    
    return num > 1
}

function snapCracklePrime(maxValue){

    let texto = ''

    for(let i = 1; i <= maxValue; i++){

        if(snapCracklePrimo(i) && i % 2 != 0 && i % 5 == 0){

            texto += 'SnapCracklePrime, '

        }else if(snapCracklePrimo(i) && i % 2 != 0){

            texto += 'SnapPrime, '

        }else if(snapCracklePrimo(i)){

            texto += 'Prime, '
            // console.log(i)

        }else if(i % 2 != 0 && i % 5 == 0){

            texto += 'SnapCrackle, ' 

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

let result = snapCracklePrime(15)

console.log(result)