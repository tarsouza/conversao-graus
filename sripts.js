
transformDegree('40F')

function transformDegree(degree) {
    const itsCelsius = degree.toUpperCase().includes('C') // para transformar caracteres em maisculo
    const itsFahrenheit = degree.toUpperCase().includes('F')

    // fluxo para caso não seja fahrenheit ou celsius
    if (!itsCelsius && !itsFahrenheit) {
            throw new Error('Grau não identificado')
    }

    //fahrenheit para celsius
    let updatedDegree = Number(degree.toUpperCase().replace("C",""))   // para retirar apenas o numero da variavel degree
    let formula = celsius => celsius * 9/5 + 32     //arrow function pois ser curta e já retornar direto o calculo
    let degreeSign = 'F'    // sulfixo que sairá após o número em celsius

    if (itsFahrenheit) {
        updatedDegree = Number(degree.toUpperCase().replace("F","")) 
        formula = fahrenheit => (fahrenheit-32) * 5/9     
        degreeSign = 'C'    
    }



    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('50F'))
    console.log(transformDegree('10c'))
    transformDegree('10h')
} catch (error){
    console.log(error)  //erro no console mencionando o local   
    console.log(error.message) // erro no console sem mencionar o local
}