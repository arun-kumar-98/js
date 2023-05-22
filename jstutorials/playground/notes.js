const fs = require("fs");

const addNotes = function (title, body) {
  const notes = loadNotes();
  notes.push({
    title: title,
    body: body,
  });

  saveNotes(notes);
  console.log(notes);
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

loadNotes();
