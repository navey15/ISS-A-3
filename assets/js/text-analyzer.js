const pronouns = [
    'i', 'me', 'my', 'mine', 'myself',
    'you', 'your', 'yours', 'yourself',
    'he', 'him', 'his', 'himself',
    'she', 'her', 'hers', 'herself',
    'it', 'its', 'itself',
    'we', 'us', 'our', 'ours', 'ourselves',
    'they', 'them', 'their', 'theirs', 'themselves'
];

const prepositions = [
    'in', 'on', 'at', 'to', 'for', 'with', 'by', 'from', 
    'of', 'about', 'between', 'among', 'through', 'beyond',
    'over', 'under', 'above', 'below', 'up', 'down'
];

const indefiniteArticles = ['a', 'an'];

function analyzeText() {
    const text = document.getElementById('input-text').value;
    
    if (countWords(text) < 10000) {
        alert('Please enter at least 10000 words');
        return;
    }

    displayBasicStats(text);
    displayPronounStats(text);
    displayPrepositionStats(text);
    displayArticleStats(text);
}

function countWords(text) {
    return text.trim().split(/\s+/).length;
}

function displayBasicStats(text) {
    const stats = {
        letters: (text.match(/[a-zA-Z]/g) || []).length,
        words: text.trim().split(/\s+/).length,
        spaces: (text.match(/\s/g) || []).length,
        newlines: (text.match(/\n/g) || []).length,
        specialSymbols: (text.match(/[^a-zA-Z0-9\s]/g) || []).length
    };

    document.getElementById('basic-stats').innerHTML = `
        <h3>Basic Statistics</h3>
        <p>Letters: ${stats.letters}</p>
        <p>Words: ${stats.words}</p>
        <p>Spaces: ${stats.spaces}</p>
        <p>Newlines: ${stats.newlines}</p>
        <p>Special Symbols: ${stats.specialSymbols}</p>
    `;
}

function displayPronounStats(text) {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const pronounCount = {};
    
    pronouns.forEach(pronoun => {
        const count = words.filter(word => word === pronoun).length;
        if (count > 0) pronounCount[pronoun] = count;
    });

    const html = Object.entries(pronounCount)
        .map(([pronoun, count]) => `<p>${pronoun}: ${count}</p>`)
        .join('');

    document.getElementById('pronouns-stats').innerHTML = `
        <h3>Pronoun Count</h3>
        ${html}
    `;
}

function displayPrepositionStats(text) {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const prepCount = {};
    
    prepositions.forEach(prep => {
        const count = words.filter(word => word === prep).length;
        if (count > 0) prepCount[prep] = count;
    });

    const html = Object.entries(prepCount)
        .map(([prep, count]) => `<p>${prep}: ${count}</p>`)
        .join('');

    document.getElementById('prepositions-stats').innerHTML = `
        <h3>Preposition Count</h3>
        ${html}
    `;
}

function displayArticleStats(text) {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const articleCount = {};
    
    indefiniteArticles.forEach(article => {
        const count = words.filter(word => word === article).length;
        if (count > 0) articleCount[article] = count;
    });

    const html = Object.entries(articleCount)
        .map(([article, count]) => `<p>${article}: ${count}</p>`)
        .join('');

    document.getElementById('articles-stats').innerHTML = `
        <h3>Indefinite Article Count</h3>
        ${html}
    `;
}