import React, { useEffect, useState } from 'react';

function formatText(text: string, type: string) {
  switch(type) {
    case 'bold': 
      return text.bold();
    case 'italic': 
      return text.italics();
    default: 
      return text;
  }
}

const Editor = () => {
  const [text, setText] = useState("");

  const handleChangeText = (e: any) => {
    setText(e.target.value);
  }

  const handleSelect  = (start: number, end: number) => {
    const selectText = text.slice(start, end);
    setText(text.replace(selectText, 'New text'));
  }

  const handleFormat = (type: string) => {
    const selectedText = text.slice(start, end);
    const formattedText = formatText(selectedText, type);
    setText(text.replace(selectedText, formattedText));
  };

  return (
    <>
      <div>
        <button onClick={() => handleSelect (0, text.length)}>Selecionar tudo</button>
        <button onClick={() => handleFormat('bold')}>Negrito</button>
        <button onClick={() => handleFormat('italic')}>Itálico</button>
      </div>

      <div>
        <textarea value={text} onChange={handleChangeText} className='w-full resize-none' />
      </div>

      {
        text
      }
    </>
  )
}

export default Editor