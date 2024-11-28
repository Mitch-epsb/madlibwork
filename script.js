document.getElementById("mad-btn").addEventListener("click", getmadlib);
document.getElementById("mad-btn2").addEventListener("click", getmadlib2);

function getmadlib() {
  let pnoun = document.getElementById("pNoun").value;
  let adject = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;

  let output = `"There are too many ${pnoun} on this ${adject} airplane!", I Screamed.
  "Somebody has to ${verb} on the ${noun} to solve this problem`;

  document.getElementById("result").innerHTML = output;
}
function getmadlib2() {
  let pnoun = document.getElementById("pNoun").value;
  let adject = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;

  let output = `I looked around me ${adject} ${pnoun} were all over the place."Quick somebody ${verb} to get the ${noun}"`;

  document.getElementById("result").innerHTML = output;
}

// let pass = prompt("Password:");
// if (pass === "123") {
// } else {
//   close();
// }
