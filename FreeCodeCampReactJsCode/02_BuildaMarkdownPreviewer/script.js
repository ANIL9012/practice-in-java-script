

const defaultMarkdown = `# Heading H1

## Subheading H2

This is a paragraph with a [link](https://www.example.com) and some **bolded text**.

Inline code: \`const x = 10;\`

\`\`\`javascript
// Code block example
function greet(name) {
  console.log('Hello, ' + name);
}
greet('World');
\`\`\`

- List item 1
- List item 2

> This is a blockquote.

![Example Image](https://via.placeholder.com/150)
`;

const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

function updatePreview() {
  const markdownText = editor.value;
  marked.setOptions({
    gfm: true,
    breaks: true,
  });

  preview.innerHTML = marked.parse(markdownText);
}
window.addEventListener("DOMContentLoaded", () => {
  editor.value = defaultMarkdown;
  updatePreview();
});

editor.addEventListener("input", updatePreview);
