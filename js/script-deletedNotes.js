let noteTitlesDeleted= [];
let noteTextsDeleted= [];

function renderDeleted() {
    let content= document.getElementById('content');

    loadNotesDeleted();
    content.innerHTML = '';
    for (let i=0; i < noteTitlesDeleted.length; i++) {
        content.innerHTML += `
            <div class="note note-deleted">
                <h3 class="title">${noteTitlesDeleted[i]}</h3>
                <p class="text">${noteTextsDeleted[i]}</p>
                <img class="note-icon" src="./img/grab.png" alt="delete-icon" onclick="deleteNoteDeleted(${i})">
            </div>
        `;
    }
    navActivate('nav-deleted');
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

function testenDeleted() {
    let text= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde aut itaque nulla eaque a ducimus maiores eos officiis iusto, earum debitis quo, aliquam iste ratione quos asperiores assumenda, est suscipit modi quia illum incidunt repellat id eius. Aliquam iusto, odio dolor similique sequi expedita nisi tenetur, est perspiciatis ab fugit provident velit. Placeat excepturi maiores aliquam, nobis nemo illum doloribus eveniet aut delectus enim a accusantium consequatur, rerum animi similique quibusdam ipsam neque aperiam omnis? Deserunt corporis voluptatum incidunt libero minus? Harum modi amet excepturi cumque laudantium saepe, tenetur, odio cupiditate molestias, provident nostrum et sapiente? Explicabo aliquid dolor necessitatibus.';
    
    console.log('testenDeleted() wird ausgeführt');
    for (i=0; i<50; i++) {
        noteTitlesDeleted.push(`Testen ${i}`);
        noteTextsDeleted.push(text);
    }
    storeNotes();
    render();
}

