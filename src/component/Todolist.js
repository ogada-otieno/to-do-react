import React from "react";
import Todoitem from "./Todoitem";

const Todolist = () => {
  return (
    <section className="container mx-auto">
      <form className="todo--input mx-auto flex" id="addTodo">
        <input
          className="todo--input--two"
          id="todo"
          type="text"
          placeholder="Add Todo"
        />
        <input className="todo--button p-medium" type="submit" value="Submit" />
      </form>
      <Todoitem />
    </section>
  );
};

export default Todolist;
