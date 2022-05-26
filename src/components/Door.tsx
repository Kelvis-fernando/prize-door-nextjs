import styles from "../styles/Door.module.css";
import { DoorModel } from "../model/door";
import { toggleSelection } from "../model/door";
import { useEffect, useState } from "react";

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

function Door(props: DoorProps) {
  const value = props.value;
  const [doorIsSelected, setDoorIsSelected] = useState<boolean | undefined>(
    false
  );
  const toggleSelectionS = () => props.onChange(toggleSelection());

  useEffect(() => {
    setDoorIsSelected(value?.selected);
    console.log(doorIsSelected);
  }, [value, doorIsSelected]);

  return (
    <div className={styles.area} onClick={toggleSelectionS}>
      <div className={doorIsSelected ? styles.selected : styles.structure}>
        <div className={styles.door}>
          <div className={styles.number}>{value?.number}</div>
          <div className={styles.doorHandle}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}

export default Door;
