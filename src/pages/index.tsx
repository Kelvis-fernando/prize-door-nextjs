import Gift from "../components/Gift";
import Door from "../components/Door";
import { DoorModel } from "../model/door";
import { unselect } from "../model/door";
import { toggleSelection } from "../model/door";
import { openDoor } from "../model/door";
import { doorModel } from "../model/door";
import { useState } from "react";

function Home() {
  const [d1, setD1] = useState(
    doorModel({ number: 1, hasGift: false, selected: false, open: false })
  );

  return (
    <div style={{ display: "flex" }}>
      <Gift />
      <Door value={d1} onChange={(newDoor) => setD1(newDoor)} />
    </div>
  );
}

export default Home;
