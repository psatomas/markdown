import { useState } from 'react';
import { marked } from 'marked';
import './App.scss';

function App() {
  const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
  const [text, setText] = useState(placeholder)

  marked.setOptions({
    breaks: true
  })

  return (
      <div className="App">  
        <div class="row parent text-center bg-dark ">
          <h1 class="h1 bg-dark">MARKDOWN PREVIEWER</h1>         
          &nbsp;        
          <div class="row float-child bg-danger ">          
            <h2 class="h2 bg-dark">EDITOR</h2>
            <textarea id="editor" class="box-text bg-light" rows={40} 
              onChange={(event) => {
                setText(event.target.value);
              }}
              value={text}>
            </textarea>
          </div>                
          <div class="row float-child  bg-warning">          
            <h2 class="h2 bg-dark">PREVIEWER</h2>           
            <div 
              id="preview" class="box-text bg-light" 
              dangerouslySetInnerHTML = {{
                __html: marked(text),
              }}
               >
            </div>
          </div>          
        </div>
      </div>
      
  );
}

export default App;
