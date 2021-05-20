import Note from '../models/note';

export const getNotes = () => {
  return Note.find({}).then((notes) => {
    return notes.reduce((result, item) => {
      result[item.id] = item;
      return result;
    }, {});
  });
};

export const deleteNote = async (id) => {
  // to quote Prof. Cormen: left as an exercise to the reader
  // remember to return the mongoose function you use rather than just delete
  try {
    const noteToDelete = await Note.findByIdAndDelete(id);
    return noteToDelete;
  } catch (error) {
    throw new Error(`delete note error: ${error}`);
  }
};

export const createNote = async (fields) => {
  const note = new Note();
  note.title = fields.title;
  note.text = fields.text;
  note.x = fields.x;
  note.y = fields.y;

  try {
    const savednote = await note.save();
    return savednote;
  } catch (error) {
    throw new Error(`create note error: ${error}`);
  }
};

export const updateNote = (id, fields) => {
  return Note.findById(id)
    .then((note) => {
    // check out this classy way of updating only the fields necessary
      Object.keys(fields).forEach((k) => {
        note[k] = fields[k];
      });
      return note.save();
    });
};
