// Code your solutions in this file
function writeCards(a){
  let thanksArray[];
  for (let i in a){
    thanksArray.push(`Thank you, ${a[i]}, for the wonderful surprise gift!`)
  }
}
writeCards(["Lisa", "Kaitlin", "Jan"]);