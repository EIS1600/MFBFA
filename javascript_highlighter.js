document.addEventListener('dblclick', function (e) {
    if (e.target.closest('.bio-text')) {
        let selectedText = window.getSelection().toString().trim();
        if (selectedText.length > 0) {
            highlightText(selectedText);
        }
    }
});

function highlightText(selectedText) {
    if (!selectedText) return;
    let regex = new RegExp(`(${escapeRegExp(selectedText)})`, "gi");

    document.querySelectorAll('.bio-text').forEach(function (div) {
        let newHTML = highlightWithoutTags(div.innerHTML, regex);
        div.innerHTML = newHTML;
    });
}

function highlightWithoutTags(html, regex) {
    let div = document.createElement('div');
    div.innerHTML = html;
    traverseNodes(div, regex);
    return div.innerHTML;
}

function traverseNodes(node, regex) {
    const walk = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
    let n;
    while ((n = walk.nextNode())) {
        if (n.parentNode.tagName !== 'SCRIPT' && 
            n.parentNode.tagName !== 'STYLE' && 
            n.parentNode.tagName !== 'SPAN') {
            n.parentNode.innerHTML = n.parentNode.innerHTML.replace(regex, '<span class="highlight">$1</span>');
        }
    }
}

function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

document.addEventListener('mousedown', function () {
    if (!window.getSelection().toString()) {
        clearHighlights();
    }
});

function clearHighlights() {
    document.querySelectorAll('.highlight').forEach(function (highlight) {
        highlight.parentNode.replaceChild(document.createTextNode(highlight.textContent), highlight);
    });
}
