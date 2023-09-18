/*Exercício 1 */

    const hobby= [
        "ler, principalmente histórias que envolve mistério, romance, ficção ou crimes reais", "ouvir música", "assistir filmes e séries", 
        "andar de bicicleta", "comer", "montar rotinas de skincare e cronograma capilar", "dormir", "participar de voluntariados", "assistir tutoriais de bordados"
    ];

    hobby.forEach(function(hobby) {
        console.log("Olá, o hobby da Jayne é " + " " + hobby + "!");
        });

  
   /*Exercício 2*/
  
    const livrosTitle = hobby.map(function(hobby) {
        return "O incrível mundo de " + hobby;
        });
        console.log(livrosTitle);


    /*Exercicio 3*/

    const dHobbies = hobby.filter(function(hobby) {
        return hobby[0] === 'd';
        } );
        
        console.log(dHobbies);
  

    /*Exercicio 4*/
    const runningPosition = hobby.findIndex(function(hobby) {
        return hobby === 'dormir';
        });
        console.log("Dormir está na posição: " + runningPosition);


        const comerPosition = hobby.findIndex(function(hobby) {
            return hobby === 'comer';
            });
            console.log("Comer está na posição: " + comerPosition);


    /*Exercicio 5*/ 
    
       
    function meusHobbies() {
        const numeroHobbies = Math.floor(Math.random() * (hobby.length - 2)) + 2;
        const atividades = [];
      
        while (atividades.length < numeroHobbies) {
          const randomIndex = Math.floor(Math.random() * hobby.length);
          const randomHobby = hobby[randomIndex];
          if (!atividades.includes(randomHobby)) {
            atividades.push(randomHobby);
          }
        }
      
        const allHobbies = atividades.join(' e ');
      
        return "Hoje, eu decidi " + allHobbies + ".";
      }
      
      for (let i = 0; i < 5; i++) {
        const formarFrase = meusHobbies();
        console.log(formarFrase);
      }


    /*Exercicio 6*/
    const hasVHobby = hobby.some(function(hobby) {
        return hobby.length > 8; });
        
        console.log("Eu tenho um hobby com mais de 8 letras? " + hasVHobby);
    

    /*Exercicio 7 */

    const allShort = hobby.every(function(hobby) { return hobby.toLowerCase; });
        console.log("Todos os meus hobbies começam com letras mínusculas? " + allShort);

    /*Exercicio 8 */
    const fiveLetterHobby = hobby.find(function(hobby) {
        return hobby.toLowerCase().includes("k");
    });
        console.log("Meu primeiro hobby com a letra 'k' é: " + fiveLetterHobby);
    
    /*Exercicio 9 */
    const firstThreeHobbies = hobby.slice(2, 4); 
    console.log("Meus três primeiros hobbies são: ",firstThreeHobbies);
  
  