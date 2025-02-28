document.addEventListener('mouseup', function () {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
        highlightText(selectedText);
    }
});

function highlightText(selectedText) {
    const regex = new RegExp(`${selectedText}`, 'gi'); // Match whole words only
    document.querySelectorAll('.bio-text').forEach(div => {
        const innerHTML = div.innerHTML;
        const newHTML = innerHTML.replace(regex, match => `<span class="highlight">${match}</span>`);
        div.innerHTML = newHTML;
    });
}

document.addEventListener('mousedown', function () {
    clearHighlights();
});

function clearHighlights() {
    document.querySelectorAll('.bio-text .highlight').forEach(highlight => {
        highlight.outerHTML = highlight.innerHTML; // Replace the span with its inner text
    });
}

/*
document.addEventListener('mouseup', function() {
    let selectedText = window.getSelection().toString().trim();
    if (selectedText) {
        highlightText(selectedText);
    }
});

function highlightText(selectedText) {
    let regex = new RegExp(selectedText, "gi");
    document.querySelectorAll('.bio-text').forEach(function(div) {
        let innerHTML = div.innerHTML;
        let newHTML = innerHTML.replace(regex, function(match) {
            return '<span class="highlight">' + match + '</span>';
        });
        div.innerHTML = newHTML;
    });
}

document.addEventListener('mousedown', function() {
    clearHighlights();
});

function clearHighlights() {
    document.querySelectorAll('.bio-text').forEach(function(div) {
        div.innerHTML = div.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/gi, "$1");
    });
}
*/