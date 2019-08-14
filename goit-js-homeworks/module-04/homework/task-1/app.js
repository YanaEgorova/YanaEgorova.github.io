"use strict";


const Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};


//console.log(Priority.LOW)

const notepad = {
  notes: [],
  getNotes() {

    return this.notes;
  },
  findNoteById(id) {

    for (const note of this.notes) {
      //console.log(note);

      if (note.id === id) {
        return note
      }




    }
  },
  saveNote(note) {

    this.notes.push(note);

    return note;
  },
  deleteNote(id) {


    const rightIndex = this.notes.indexOf(notepad.findNoteById(id))

    if (rightIndex) {
      this.notes.splice(rightIndex, 1)
      return;
    }


  },
  updateNoteContent(id, updatedContent) {

    const note = this.findNoteById(id);

    //console.log(note)

    const result = Object.assign(note, updatedContent)



    return result

  },
  updateNotePriority(id, priority) {

    const note = this.findNoteById(id);

    if (note) {
      note.priority = priority;
    }

    return note;
  },
  filterNotesByQuery(query) {

    const result = [];

    for (let i = 0; i < this.notes.length; i += 1) {
      //console.log(this.notes[i]);
      const note = this.notes[i];


      let body = note.body.toLowerCase().includes(query.toLowerCase())

      //console.log(body)

      let title = note.title.toLowerCase().includes(query.toLowerCase())

      //console.log(title)

      if (body || title) {
        result.push(note)
      }

    }
    return result;
  },
  filterNotesByPriority(priority) {

    const result = [];

    for (let i = 0; i < this.notes.length; i += 1) {
      //console.log(this.notes[i]);
      const note = this.notes[i];

      if (note.priority === priority) {

        result.push(note)

      }


    }
    return result
  }
};


notepad.saveNote({
  id: "id-1",
  title: "JavaScript essentials",
  body: "Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",
  priority: Priority.HIGH
});

notepad.saveNote({
  id: "id-2",
  title: "Refresh HTML and CSS",
  body: "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
  priority: Priority.NORMAL
});

notepad.saveNote({
  id: "id-3",
  title: "Get comfy with Frontend frameworks",
  body: "First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.",
  priority: Priority.NORMAL
});

notepad.saveNote({
  id: "id-4",
  title: "Winter clothes",
  body: "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Priority.LOW
});







console.log(notepad.findNoteById("id-1"))

console.log('Все текущие заметки: ', notepad.getNotes());

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority('id-4', Priority.NORMAL);

console.log(
  'Заметки после обновления приоритета для id-4: ',
  notepad.getNotes(),
);

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority('id-3', Priority.LOW);

console.log(
  'Заметки после обновления приоритета для id-3: ',
  notepad.getNotes(),
);

/*
 * Решил отфильтровать заметки по слову html
 */
console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotesByQuery('html'),
);

/*
 * Решил отфильтровать заметки по слову javascript
 */
console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotesByQuery('javascript'),
);

/*
 * Хочу посмотреть только заметки с нормальным приоритетом
 */
console.log(
  'Отфильтровали заметки по нормальному приоритету: ',
  notepad.filterNotesByPriority(Priority.NORMAL),
);

/*
 * Обновим контент заметки с id-3
 */
notepad.updateNoteContent('id-3', {
  title: 'Get comfy with React.js or Vue.js',
});

console.log(
  'Заметки после обновления контента заметки с id-3: ',
  notepad.getNotes(),
);
/*
 * Повторил HTML и CSS, удаляю запись c id-2
 */
notepad.deleteNote('id-2');
console.log('Заметки после удаления с id -2: ', notepad.getNotes());