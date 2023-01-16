import React from "react";

function Navbar() {
  return (
    <section className="todo--navbar">
      <nav className="flex justify--between items-center container mx-auto p-medium">
        <div>
          <h2>
            To<span>Do List</span>
          </h2>
          {/* <h2>About Us</h2> */}
          
        </div>

        <div className="flex gap-medium items-center">
          <div>Completed</div>
          <div>Incomplete</div>
          <div>Sign Up</div>
          <div>Sign In</div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
