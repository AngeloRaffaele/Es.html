const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
  ];
        function all (student){
        const name = student.forEach(n => console.log(n.nome));
        const voto = student.find(v => v.voto >90);
        const media = student.reduce((s, person)=>s +person.voto,0);
        const mediaArr = media /student.length;
        Math.round(mediaArr);
        const maiuscolo = student.map(nomi => nomi.nome.toUpperCase());
        const votimax = student.filter(voti => voti.voto > 85);
            return voto,votimax,name,mediaArr,maiuscolo;
    }
    console.log(all(studenti));

        /*console.log(voto);
        console.log(mediaArr);
        console.log(maiuscolo);
        console.log(votimax);*/
 