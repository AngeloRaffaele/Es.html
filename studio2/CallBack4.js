const numbers =[1,5,7,8,9,6,4,6,3];

function runCallbacks(callbacks) {
    callbacks.forEach(items => items () );
}
  function firstCallback() {
    console.log("weila");
  }
  function secondCallback() {
    console.log('caio');
  }
  
  function thirdCallback() {
    console.log("ciao");
  }
  
  const callbackArray = [firstCallback, secondCallback, thirdCallback];
  runCallbacks(callbackArray);