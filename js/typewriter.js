var i = 0;
var original = document.getElementById("typewriter").innerHTML
var words = [
 "society",
 "association",
 "exploration",
 "knowledge",
 "curiosity",
 "ambition",
 "community",
 "network",
 "inspiration",
 "culture"];

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
  }
async function type(txt){
  while(i<txt.length){
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    await delay(100);
  }
  await delay(1000);
  while(i>=0){
    var temp = original + txt.substring(0,i);
    document.getElementById("typewriter").innerHTML = temp;
    i--;
    await delay(100);
  }
}
async function typewriter(){
  while(true){
    for(index in words){
      await type(words[index]);
    }
  }
}
typewriter();
