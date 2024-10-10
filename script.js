const defaultMarkdown = `
# Header 1
## Subheader H2
[Link to Google](https://www.google.com)
\`inline code\`
\`\`\`
// code block
console.log('Hello, world!');
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://via.placeholder.com/150)
**Bolded text**
`;

// Fonction pour mettre à jour la prévisualisation
const updatePreview = () => {
    let preview = document.querySelector("#preview");
    let text = document.querySelector("#editor").value;

    // Utilisation de marked.parse() pour convertir le Markdown en HTML
    preview.innerHTML = marked.parse(text);
}

// Mettre à jour la prévisualisation à chaque saisie
document.getElementById('editor').addEventListener('input', updatePreview);

// Appel initial de la fonction pour afficher le contenu par défaut
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('editor').value = defaultMarkdown;
    updatePreview();
});

document.getElementById('clearButton').addEventListener('click',()=>{
    document.getElementById('editor').value = '';
    updatePreview();

})

// Option pour gérer les sauts de ligne comme <br>
marked.setOptions({
    breaks: true
});
