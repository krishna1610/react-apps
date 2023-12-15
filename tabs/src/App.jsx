import './App.css';
import Tabs from './Tabs';

function App() {
  const items = [
    {
      label : "html",
      title : "HTML",
      content : "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
    },
    { 
      label : "css",
      title : "CSS",
      content : "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML."
    },
     { 
      label : "javascript",
      title : "JavaScript",
      content : "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
    }
  ];

  return (
    <div>
      <Tabs items={items}/>
    </div>
  );
}

export default App;
