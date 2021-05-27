import marked from 'marked';
import { useEffect, useRef, useState } from 'react';
import './App.css';

const defaultText = `# Welcome to my React Markdown Previewer!

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

There's also [links](https://www.freecodecamp.com), and
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


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`


function App() {
  
  
  const [preview, setPreview] = useState("")

  const textRef = useRef(false)

  useEffect(() => {
    let previewHtml = document.getElementById("preview")
    
    setPreview(textRef.current.value)
    previewHtml.innerHTML = marked(textRef.current.value)
  },[])

  const handleChange = (e) =>{
    let previewHtml = document.getElementById("preview")
    setPreview(e.target.value)
    previewHtml.innerHTML = marked(e.target.value)
  }



  return (
    <div id="container" >
      <textarea ref={textRef} defaultValue={defaultText} onChange={handleChange} id="editor" >
      


      </textarea>
      <div id="preview" ></div>
    </div>
  );
}

export default App;
