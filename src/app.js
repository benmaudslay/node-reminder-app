const yargs = require("yargs");

const { addNotes } = require("../utils/notes");

const command = process.argv[2];

if (command == "add") {
  console.log("adding a note...");
  addNotes(yargs.argv.note);
} else if (command == "remove") {
  console.log("removing note");
} else if (command == "list") {
  console.log("showing all notes");
} else {
  console.log("command not found");
}
