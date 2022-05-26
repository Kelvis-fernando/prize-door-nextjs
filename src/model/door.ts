export interface DoorModel {
  number?: number;
  hasGift?: boolean;
  selected?: boolean;
  open?: boolean;
}

let tested: DoorModel[] = [];

export function doorModel(dataFromDoor: DoorModel) {
  tested.push(dataFromDoor);
  return { ...dataFromDoor };
}

export function unselect(dataFromDoor: DoorModel) {
  const selected = !dataFromDoor.selected;
  return { ...dataFromDoor, selected: selected };
}
export function toggleSelection() {
  const selected = !tested;
  console.log(selected);
  return { ...tested, selected: selected };
}
export function openDoor(dataFromDoor: DoorModel) {
  const open = true;
  return { ...dataFromDoor, open: open };
}

// export default class DoorModels {
//   #number: number;
//   #hasGift: boolean;
//   #selected: boolean;
//   #open: boolean;

//   constructor(number: number, hasGift = false, selected = false, open = false) {
//     this.#number = number;
//     this.#hasGift = hasGift;
//     this.#selected = selected;
//     this.#open = open;
//   }

//   get number() {
//     return this.#number;
//   }

//   get hasGift() {
//     return this.#hasGift;
//   }

//   get selected() {
//     return this.#selected;
//   }

//   get open() {
//     return this.#open;
//   }

//   get close() {
//     return !this.open;
//   }

//   unselect() {
//     const selected = !this.selected;
//     return new DoorModel(this.number, this.hasGift, selected, this.open);
//   }

//   toggleSelection() {
//     const selected = !this.selected;
//     return new DoorModel(this.number, this.hasGift, selected, this.open);
//   }

//   openDoor() {
//     const aberta = true;
//     return new DoorModel(this.number, this.hasGift, this.selected, aberta);
//   }
// }
