var teste = 'Exemplo';


(()=>{
    console.log(`valor dentro da função ${teste}`);

    if(true){
        console.log(`valor dentro do if ${teste}`);
    }
    console.log(`valor após a execução do if ${teste}`);
}
)();