var array_result = "";
var c = "";
var password = "";
var finish = "false";
var i = 0;
var password_array = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
];
function create_id() {
  while (finish === "false") {
    var array_result = Math.floor(Math.random() * 26);
    c = c + password_array[parseInt(array_result)];
    i = i + 1;
    if (i === 5) {
      finish = "true";
    }
  }
  return c;
}

create_id();
