// Holds the navigation bar

import Todolist from "../component/Todolist";
import Navbar from "../component/Navbar";
import Foooter from "../component/Foooter";

const Home = () => {
  return (
    <>
      <Navbar />
      <Todolist />
      <Foooter />
    </>
  );
};

export default Home;
