/*Utilizzato forEach per stampare i nomi degli studenti.
Utilizza find per trovare uno studente con un voto superiore a 90.
Utilizzato reduce per calcolare la media dei voti degli studenti.
Utilizzato mapper creare un nuovo array contenente i nomi degli studenti in maiuscolo.
Utilizza filterper trovare gli studenti con voti superiori a 85.*/


const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
  ];

        const name = studenti.forEach(n => console.log(n.nome));
        const voto = studenti.find(v => v.voto >90);
        const media = studenti.reduce((s, person)=>s +person.voto,0);
        const mediaArr = media /studenti.length;
        Math.round(mediaArr);
        const maiuscolo = studenti.map(nomi => nomi.nome.toUpperCase());
        const votimax = studenti.filter(voti => voti.voto > 85);

        console.log(voto);
        console.log(mediaArr);
        console.log(maiuscolo);
        console.log(votimax);
 