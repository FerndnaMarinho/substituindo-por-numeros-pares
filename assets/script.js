      function substituiNumerosPares(resultado) {
        if (!resultado.length) return console.log(-1);
    
        const naoZero = (num) => num !== 0;
        const numPar = (num) => num % 2 === 0;
    
        for (let i = 0; i < resultado.length; i++) {
            if (numPar(resultado[i]) && naoZero(resultado[i])) {
                console.log(`trocando ${resultado[i]} por 0...`);
                resultado[i] = 0;
            } else if (!naoZero(resultado[i])) {
                console.log('Ops, você já vale 0!');
            }
        }
        console.log(resultado);
    }
    
    substituiNumerosPares([6, 4, 7, 5,10,9]);