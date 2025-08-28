// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place.

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.
// Default markdown text (must include elements specified)
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

// Function to update the preview area
function updatePreview() {
  // Using marked to convert markdown to HTML
  // Optional: interpret carriage returns as <br> with breaks: marked.setOptions({ breaks: true });
  const markdownText = editor.value;

  // Enable GFM and breaks for optional bonus
  marked.setOptions({
    gfm: true,
    breaks: true,
  });

  preview.innerHTML = marked.parse(markdownText);
}

// Initialize editor with default markdown and update preview
window.addEventListener("DOMContentLoaded", () => {
  editor.value = defaultMarkdown;
  updatePreview();
});

// Update preview as user types
editor.addEventListener("input", updatePreview);
