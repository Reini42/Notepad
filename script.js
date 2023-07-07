let noteTitle= [];
let noteText= [];

function showNewNote() {
    document.getElementById('newNote-bg').classList.remove('display-none');
}

function saveNote() {
    let inputTitle= document.getElementById('inputTitle');
    let inputText= document.getElementById('inputText');

    noteTitle.push(inputTitle.value);
    noteText.push(inputText.value);
}

