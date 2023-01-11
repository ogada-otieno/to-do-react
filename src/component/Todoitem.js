// list of items

const Todoitem = () => {
  return (
    <ul className="todo--items mx-auto flex flex-col gap-small" id="todoItems">
      <li className="todo--item p-medium flex justify--between items-center">
        <span>item one</span>
        <button className="delete--button p-small">X</button>
      </li>
      <li className="todo--item p-medium flex justify--between items-center">
        <span>Item Two</span>
        <button className="delete--button p-small">X</button>
      </li>
      <li className="todo--item p-medium flex justify--between items-center">
        <span>Item Three</span>
        <button className="delete--button p-small">X</button>
      </li>
    </ul>
  );
};

export default Todoitem;


