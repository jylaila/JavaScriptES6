function init(){
    const ex = "Essa variável";
    return function(){
        console.log(`Valor da variável é ${ex}`);
        return function(){
            console.log(`Valor da variável é ${ex}`);
            return function(){
                console.log(`Valor da variável é ${ex}`);
            }
        }

    }    
}
const initFn1 = init();
const initFn2 = initFn1();
const initFn3 = initFn2();

initFn3();