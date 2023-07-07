let noteTitlesDeleted= [];
let noteTextsDeleted= [];

function renderDeleted() {
    let content= document.getElementById('content');

    loadNotesDeleted();
    content.innerHTML = '';
    for (let i=0; i < noteTitlesDeleted.length; i++) {
        content.innerHTML += `
            <div class="note">
                <h3 class="title">${noteTitlesDeleted[i]}</h3>
                <p class="text">${noteTextsDeleted[i]}</p>
                <button onclick="deleteNoteDeleted(${i})">endgütlig löschen</button>
            </div>
        `;
    }
}

function storeNotesDeleted() {
    localStorage.setItem('noteTitlesDeleted', JSON.stringify(noteTitlesDeleted));
    localStorage.setItem('noteTextsDeleted', JSON.stringify(noteTextsDeleted));
}

function loadNotesDeleted() {
    if (localStorage.getItem('noteTitlesDeleted') || localStorage.getItem('noteTextsDeleted')) {
        noteTitlesDeleted= JSON.parse(localStorage.getItem('noteTitlesDeleted'));
        noteTextsDeleted= JSON.parse(localStorage.getItem('noteTextsDeleted'));
    } else {
        console.log('loadNotesDeleted: No localStorage-Items found');
    }   
}

function deleteNoteDeleted(i) {
    noteTitlesDeleted.splice(i, 1);
    noteTextsDeleted.splice(i, 1);
    storeNotesDeleted();
    renderDeleted();
}

