function renderImprint() {
    let content= document.getElementById('content');

    content.innerHTML = '';
    content.innerHTML += `
        <div class="note note-impr">
            <h3 class="title">Angaben gemäß §5TMG</h3>
            <p class="text">
                Reinhard Wansch <br>
                Elmstreet 1 <br>
                0130 Bikini Bottom
            </p>
        </div>
        <div class="note note-impr">
            <h3 class="title">Kontakt</h3>
            <p class="text">
                Telefon: +49 (0) 123 44 55 66 <br>
                Telefax: +49 (0) 123 44 55 99 <br>
                E-Mail: <a href="mailto:"Freddy@Krueger.com">Freddy@Krueger.com</a>
            </p>
        </div>
    `;
    navActivate();
}

function renderAttribution() {
    let content= document.getElementById('content');

    content.innerHTML = '';
    content.innerHTML += `
        <div class="note note-attr">
            <img class="attr-icon" src="./img/notizbuch-512x512.png" alt="notizbuch-icon">
            <p class="text attr-text">
                <a href="https://www.flaticon.com/de/kostenlose-icons/schreibwerkzeug" title="schreibwerkzeug Icons">Schreibwerkzeug Icons erstellt von icon blast - Flaticon</a>  
            </p>
        </div>

        <div class="note note-attr">
            <img class="attr-icon" src="./img/notizbuch2-512x512.png" alt="notizbuch-icon">
            <p class="text attr-text">
            <a href="https://www.flaticon.com/de/kostenlose-icons/adressbuch" title="adressbuch Icons">Adressbuch Icons erstellt von IYIKON - Flaticon</a>
            </p>
        </div>
        
        <div class="note note-attr">
            <img class="attr-icon" src="./img/mull-512x512.png" alt="trash-icon">
            <p class="text attr-text">
            <a href="https://www.flaticon.com/de/kostenlose-icons/mull-kann" title="müll kann Icons">Müll kann Icons erstellt von IYIKON - Flaticon</a>
            </p>
        </div>
        
        <div class="note note-attr">
            <img class="attr-icon" src="./img/plaudern-512x512.png" alt="trash-icon">
            <p class="text attr-text">
            <a href="https://www.flaticon.com/de/kostenlose-icons/plaudern" title="plaudern Icons">Plaudern Icons erstellt von Swifticons - Flaticon</a>
            </p>
        </div>

        <div class="note note-attr">
            <img class="attr-icon" src="./img/grab.png" alt="grab-icon">
            <p class="text attr-text">
            <a href="https://www.flaticon.com/de/kostenlose-icons/tod" title="tod Icons">Tod Icons erstellt von Freepik - Flaticon</a>
            </p>
        </div>

        <div class="note note-attr">
            <img class="attr-icon" src="./img/die-info.png" alt="info-icon">
            <p class="text attr-text">
            <a href="https://www.flaticon.com/de/kostenlose-icons/information" title="information Icons">Information Icons erstellt von juicy_fish - Flaticon</a>
            </p>
        </div>

        <div class="note note-attr">
            <h3 class="title">reset.css</h3>
            <p class="text attr-text">
            <a href="https://meyerweb.com/eric/tools/css/reset/">https://meyerweb.com/eric/tools/css/reset/</a>
            </p>
        </div>
        
        <div class="note note-attr">
            <h3 class="title">Aristoteles-Zitat</h3>
            <p class="text attr-text">
            <a href="https://www.careelite.de/aristoteles-zitate-sprueche-weisheiten/">https://www.careelite.de/aristoteles-zitate-sprueche-weisheiten/</a>
            </p>
        </div>
    `;
    navActivate();
}

function renderInfoResponsive() {
    let content= document.getElementById('content');

    content.innerHTML = '';

    //////////// IMPRESSUM

    content.innerHTML += `
        <div class="note note-impr">
            <h3 class="title">Angaben gemäß §5TMG</h3>
            <p class="text">
                Reinhard Wansch <br>
                Elmstreet 1 <br>
                0130 Bikini Bottom
            </p>
        </div>
        <div class="note note-impr">
            <h3 class="title">Kontakt</h3>
            <p class="text">
                Telefon: +49 (0) 123 44 55 66 <br>
                Telefax: +49 (0) 123 44 55 99 <br>
                E-Mail: <a href="mailto:"Freddy@Krueger.com">Freddy@Krueger.com</a>
            </p>
        </div>
    `;

    //////////// QUELLENANGABE

    content.innerHTML += `
        <div class="note note-attr">
            <img class="attr-icon" src="./img/notizbuch-512x512.png" alt="notizbuch-icon">
            <p class="text attr-text">
                <a href="https://www.flaticon.com/de/kostenlose-icons/schreibwerkzeug" title="schreibwerkzeug Icons">Schreibwerkzeug Icons erstellt von icon blast - Flaticon</a>  
            </p>
        </div>

        <div class="note note-attr">
            <img class="attr-icon" src="./img/notizbuch2-512x512.png" alt="notizbuch-icon">
            <p class="text attr-text">
            <a href="https://www.flaticon.com/de/kostenlose-icons/adressbuch" title="adressbuch Icons">Adressbuch Icons erstellt von IYIKON - Flaticon</a>
            </p>
        </div>
        
        <div class="note note-attr">
            <img class="attr-icon" src="./img/mull-512x512.png" alt="trash-icon">
            <p class="text attr-text">
            <a href="https://www.flaticon.com/de/kostenlose-icons/mull-kann" title="müll kann Icons">Müll kann Icons erstellt von IYIKON - Flaticon</a>
            </p>
        </div>
        
        <div class="note note-attr">
            <img class="attr-icon" src="./img/plaudern-512x512.png" alt="trash-icon">
            <p class="text attr-text">
            <a href="https://www.flaticon.com/de/kostenlose-icons/plaudern" title="plaudern Icons">Plaudern Icons erstellt von Swifticons - Flaticon</a>
            </p>
        </div>

        <div class="note note-attr">
            <img class="attr-icon" src="./img/grab.png" alt="grab-icon">
            <p class="text attr-text">
            <a href="https://www.flaticon.com/de/kostenlose-icons/tod" title="tod Icons">Tod Icons erstellt von Freepik - Flaticon</a>
            </p>
        </div>

        <div class="note note-attr">
            <img class="attr-icon" src="./img/die-info.png" alt="info-icon">
            <p class="text attr-text">
            <a href="https://www.flaticon.com/de/kostenlose-icons/information" title="information Icons">Information Icons erstellt von juicy_fish - Flaticon</a>
            </p>
        </div>

        <div class="note note-attr">
            <h3 class="title">reset.css</h3>
            <p class="text attr-text">
            <a href="https://meyerweb.com/eric/tools/css/reset/">https://meyerweb.com/eric/tools/css/reset/</a>
            </p>
        </div>
        
        <div class="note note-attr">
            <h3 class="title">Aristoteles-Zitat</h3>
            <p class="text attr-text">
            <a href="https://www.careelite.de/aristoteles-zitate-sprueche-weisheiten/">https://www.careelite.de/aristoteles-zitate-sprueche-weisheiten/</a>
            </p>
        </div>
    `;

    //////////// TEST-FUNKTION

    content.innerHTML +=
    `
    <div class="note note-impr">
        <h3 class="title">Testen</h3>
        <p class="text">
            Die <a href="#" onclick="testen()">Testfunktion</a> erstellt 50 Notizen mit Standard-Text.<br>
            Achtung! Aktuelle Notizen werden überschrieben!
        </p>
</div>`

    navActivate();
}