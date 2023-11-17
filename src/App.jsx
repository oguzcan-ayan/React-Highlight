import React, { Fragment } from 'react';
import './App.css';

function App() {

  function Highlight({ text, match, render }){
    const type = {
      hashtag: '(#[a-zçğıöşüÇĞIÖŞÜİ-]+)',
      mention: '(@[a-zçğıöşüÇĞIÖŞÜİ-]+)'
    }[match]
    let regex = new RegExp(type || `(${match}+)`, 'gi');
    let parts = text.split(regex);
    return parts.map((part, key) =>( 
    <Fragment key={key}>{regex.test(part) ? render(part) : part}</Fragment>
    )); 
  }

    const text = "Bu bir yazı ve #oğuzcanayan etiketini vurgulamak yazı #istiyorum ve @oguzcan-ayan kullanıcısı tarafından.";

  return (
    <>
      <div>
        <Highlight 
          text={text}
          match="mention"
          render={mention => <a href={`https://www.github.com/${mention.replace('@', '')}`} target='_blank'>{mention}</a>}
          >
        </Highlight>
      </div>  
    </>
  )
}

export default App;
