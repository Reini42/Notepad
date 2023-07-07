let noteTitles= [];
let noteTexts= [];

function showNewNote() {
    document.getElementById('newNote-bg').classList.remove('display-none');
}

function hideNewNote() {
    document.getElementById('newNote-bg').classList.add('display-none');
}

function storeNotes() {
    localStorage.setItem('noteTitles', JSON.stringify(noteTitles));
    localStorage.setItem('noteTexts', JSON.stringify(noteTexts));
}

function saveNote() {
    let inputTitle= document.getElementById('inputTitle');
    let inputText= document.getElementById('inputText');

    noteTitles.push(inputTitle.value);
    noteTexts.push(inputText.value);
    storeNotes();
    hideNewNote();
    inputTitle.value= '';
    inputText.value= '';
}

