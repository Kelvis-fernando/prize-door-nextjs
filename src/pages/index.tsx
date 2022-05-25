import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import Gift from "../components/Gift";

const Home: NextPage = () => {
  return (
    <div>
      <Gift />
    </div>
  );
};

export default Home;
