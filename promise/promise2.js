const nomi = { id: 1, name: 'John' };
const posts =['Post 1', 'Post 2', 'Post 3'];

function fetchUserData(nome) {
    return new Promise((resolve, reject) =>{
        if (typeof nome === "object" ) {
            let fetchUserData ={}
            resolve(fetchUserData = nome);
        } else{
            reject("nome non valido")
        }
    });
  }
  
  function fetchUserPosts(post) {
    return new Promise ((resolve, reject) =>{
        if (Array.isArray(post)) {
            let fetchUserPosts =[];
            resolve (fetchUserPosts =post);
        } else {
            reject("post non è un array")
        }
    });
  }
  
  fetchUserData(nomi).then( () => {
    console.log(`i nomi sono: ${nomi.name}`);
  }).catch((error) => {
    console.log(error);
  });

  fetchUserPosts(posts).then(() => {
        console.log(`i post sono: ${posts}`);
  }).catch((error) => {
    console.log(error);
  })