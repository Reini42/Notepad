let noteTitles= [];
let noteTexts= [];

function render() {
    let content= document.getElementById('content');

    loadNotes();
    content.innerHTML = '';
    for (let i=0; i < noteTitles.length; i++) {
        content.innerHTML += `
            <div class="note">
                <h3 class="title" onclick="changeNote(${i})">${noteTitles[i]}</h3>
                <p class="text">${noteTexts[i]}</p>
                <button onclick="deleteNote(${i})">Löschen</button>
            </div>
        `;
    }
    navActivate('nav-notes');
}

function showNoteDialog(i) {
    let buttonContainer= document.getElementById('buttonContainer');

    if (i != undefined) {
        let inputTitle= document.getElementById('inputTitle');
        let inputText= document.getElementById('inputText');

        buttonContainer.innerHTML= `
            <button onclick="saveNote(${i})">Speichern</button>
            <button onclick="hideNoteDialog()">Abbrechen</button>
        `;
        inputTitle.value= noteTitles[i];
        inputText.value= noteTexts[i];
    } else {
        buttonContainer.innerHTML= `
            <button onclick="saveNote()">Speichern</button>
            <button onclick="hideNoteDialog()">Abbrechen</button>
        `;
    }
    document.getElementById('noteDialog-bg').classList.remove('display-none');
}

function hideNoteDialog() {
    document.getElementById('noteDialog-bg').classList.add('display-none');
    clearDialog();
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

function clearDialog() {
    let inputTitle= document.getElementById('inputTitle');
    let inputText= document.getElementById('inputText');

    inputTitle.value= '';
    inputText.value= '';
}

function saveNote(i) {
    let inputTitle= document.getElementById('inputTitle');
    let inputText= document.getElementById('inputText');

    if (i == undefined) {
        noteTitles.push(inputTitle.value);
        noteTexts.push(inputText.value);
    } else {
        noteTitles[i]= inputTitle.value;
        noteTexts[i]= inputText.value;
    }
    storeNotes();
    // hideNoteDialog();
    render();
}

function deleteNote(i) {
    noteTitlesDeleted.push(noteTitles[i]);
    noteTextsDeleted.push(noteTexts[i]);
    storeNotesDeleted();
    noteTitles.splice(i, 1);
    noteTexts.splice(i, 1);
    storeNotes();
    render();
}

function changeNote(i) {
    showNoteDialog(i);
}

function navActivate(navItem) {
    document.getElementById('nav-notes').classList.remove('nav-item-active');
    document.getElementById('nav-deleted').classList.remove('nav-item-active');
    document.getElementById('nav-quotes').classList.remove('nav-item-active');
    
    document.getElementById(navItem).classList.add('nav-item-active');
    
}

function testen() {
    console.log('testen() wird ausgeführt');
}

