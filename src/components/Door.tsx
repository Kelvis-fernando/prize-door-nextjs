import styles from "../styles/Door.module.css";
import DoorModel from "../model/door";
import { useEffect, useState } from "react";

interface DoorProps {
  door?: DoorModel;
}

function Door(props: DoorProps) {
  const { door } = props;
  const [doorIsSelected, setDoorIsSelected] = useState<boolean | undefined>(
    false
  );

  useEffect(() => {
    setDoorIsSelected(door?.selected);
    console.log(doorIsSelected);
  }, []);

  return (
    <div className={styles.area}>
      <div className={doorIsSelected ? styles.selected : styles.structure}>
        <div className={styles.door}>
          <div className={styles.number}>{door?.number}</div>
          <div className={styles.doorHandle}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}

export default Door;
