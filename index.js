// Code your solutions in this file
function writeCards(a,event){
  let thanksArray[];
  for (let i in a){
    thanksArray.push(`Thank you, ${a[i]}, for the wonderful ${event} gift!`)
  }
  return thanksArray;
}
writeCards(["Lisa", "Kaitlin", "Jan"]);