import React, { useState } from "react";
import Navbar from "./components/navbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Comment from "./components/Comment";
import Footer from "./components/Footer";
import useNode from "./hooks/useNode";

/*Comment Object with unique id and an item that is the comment*/
const comments = {
  id: 1,
  items: [],
};

function App() {
  /*The code bellow, as well as the <comment/> part both will make it so that we will loop through and render each comment every time a new comment or reply is added</comment>*/
  const [commentsData, setCommentsData] = useState(comments);

  const { insertNode, editNode, deleteNode } = useNode();

  /*For adding comment/reply*/
  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };

  /*For editing comment/reply*/
  const handleEditNode = (folderId, item) => {
    const finalStructure = editNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };

  /*For deleting comment/reply*/
  const handleDeleteNode = (folderId, item) => {
    const finalStructure = deleteNode(commentsData, folderId, item);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  };

  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <div className="App">
        <Comment
          handleInsertNode={handleInsertNode}
          handleEditNode={handleEditNode}
          handleDeleteNode={handleDeleteNode}
          comment={commentsData}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
