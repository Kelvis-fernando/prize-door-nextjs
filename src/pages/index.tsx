import Gift from "../components/Gift";
import Door from "../components/Door";
import DoorModel from "../model/door";
import { useState } from "react";

function Home() {
  const [d1, setD1] = useState(new DoorModel(1, false, true));

  return (
    <div style={{ display: "flex" }}>
      <Gift />
      <Door door={d1} />
    </div>
  );
}

export default Home;
