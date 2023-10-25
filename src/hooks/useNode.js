/*This file contains the logic behind each of the button*/

const useNode = () => {
  const insertNode = function (tree, commentId, item) {
    if (tree.id === commentId) {
        tree.items.push({
            id: new Date().getTime(),
            name: item,
            items: []
        });

       return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, commentId, item);
    });

    return { ...tree, items: latestNode };
  };

  const editNode = (tree, commentId, value) => {
    if (tree.id === commentId) {
        tree.name = value;
        return tree;
    }

    tree.items.map((ob) => {
        return editNode(ob, commentId, value);
    });

    return { ...tree };
  };

  const deleteNode = (tree, id) => {
    for (let i=0; i<tree.item; i++) {
        const currentItem = tree.item[i];
        if (currentItem === id)
        {
            tree.item.splice(i, 1);
            return tree;
        } else {
            deleteNode(currentItem, id)
        }
    }
  };

  return { insertNode, editNode, deleteNode };
}

export default useNode