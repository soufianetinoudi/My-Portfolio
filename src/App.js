import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Comment from "./components/Comment";

/*Comment Object with unique id and an item that is the comment*/
const comments = {
  id: 1,
  items: [
    {
      id: 1677252427307,
      name: "hello",
      items: [
        {
          id: 1677252434572,
          name: "hello world",
          items: [
            {
              id: 1677252449713,
              name: "hello world 123",
              items: [],
            }
          ]
        }
      ]
    },
    {
      id: 1677252457839,
      name: "react js",
      items: [
        {
          id: 1677252468098,
          name: "javaScript",
          items: []
        }
      ]
    }
  ]
};

function App() {
  /*The code bellow, as well as the <comment/> part both will make it so that we will loop through and render each comment every time a new comment or reply is added</comment>*/
  const [commentsData, setCommentsData] = useState(comments);
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <div className="App">
        <Comment comment={commentsData}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
