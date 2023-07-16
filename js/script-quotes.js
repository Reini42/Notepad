let quoteTexts= [
    'Es gibt nur einen Weg, um Kritik zu vermeiden:<br> Nichts tun, nichts sagen, nichts sein.',
    'Mit dem Wissen <br> wächst der Zweifel',
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    'Wahre Worte sind nicht immer schön.<br> Schöne Worte sind nicht immer wahr.',
    'Tue es oder tue es nicht.<br> Es gibt kein Versuchen.',
    'Hallo Welt'
];
let quoteAuthors= [
    'Aristoteles',
    'Johann Wolfgang von Goethe',
    'Marcus Tullius Cicero',
    'Laozi',
    'Meister Yoda',
    'jeder Programmier-Neuling'
];

function renderQuotes() {
    let content= document.getElementById('content');

    content.innerHTML = '';
    for (let i=0; i < quoteTexts.length; i++) {
        content.innerHTML += `
            <div class="note note-quote">
                <p class="quote-text">${quoteTexts[i]}</p>
                <h3 class="author">${quoteAuthors[i]}</h3>
            </div>
        `;
    }
    navActivate('nav-quotes');
}