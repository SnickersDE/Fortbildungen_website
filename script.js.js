
function zeigeThema(thema) {
    const titelMap = {
        'medienpaedagogik': 'Medienpädagogik',
        'medien_schule': 'Medien im Schullalltag',
        'konzept_ogts': 'Konzeptentwicklung im offenen Ganztag',
        'fakenews': 'Fake News',
        'medienschulung': 'Medienschulung'
    };

    document.getElementById('thema-titel').innerText = titelMap[thema];
    document.getElementById('pdf-viewer').src = 'pdfs/' + thema + '_uebersicht.pdf';

    const downloads = document.getElementById('downloads');
    downloads.innerHTML = `
        <a href="pdfs/${thema}_vollversion.pdf" class="download-link" download>📥 ${titelMap[thema]} (Vollversion)</a>
        <p>Weitere Materialien:</p>
        <a href="pdfs/${thema}_material1.pdf" class="download-link" download>📄 Zusatzmaterial 1</a>
        <a href="pdfs/${thema}_material2.pdf" class="download-link" download>📄 Zusatzmaterial 2</a>
    `;
}
