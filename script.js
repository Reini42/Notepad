let noteTitles= [];
let noteTexts= [];

function render() {
    let content= document.getElementById('content');

    loadNotes();
    content.innerHTML = '';
    for (let i=0; i < noteTitles.length; i++) {
        content.innerHTML += `
            <div class="note">
                <h3 class="title">${noteTitles[i]}</h3>
                <p class="text">${noteTexts[i]}</p>
                <button onclick="deleteNote(${i})">Löschen</button>
            </div>
        `;
    }
}

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

function loadNotes() {
    if (localStorage.getItem('noteTitles') || localStorage.getItem('noteTexts')) {
        noteTitles= JSON.parse(localStorage.getItem('noteTitles'));
        noteTexts= JSON.parse(localStorage.getItem('noteTexts'));
    } else {
        console.log('loadNotes: No localStorage-Items found');
    }   
}

function saveNote() {
    let inputTitle= document.getElementById('inputTitle');
    let inputText= document.getElementById('inputText');

    noteTitles.push(inputTitle.value);
    noteTexts.push(inputText.value);
    storeNotes();
    hideNewNote();
    render();
    inputTitle.value= '';
    inputText.value= '';
}

function deleteNote(i) {
    noteTitles.splice(i, 1);
    noteTexts.splice(i, 1);
    storeNotes();
    render();
}

