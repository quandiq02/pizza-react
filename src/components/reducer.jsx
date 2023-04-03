import { data } from "./data";

export default function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return state.map((elem) =>
          elem.id === action.index
            ? { ...elem, count: elem.count + 1, isAdded: true }
            : elem
        );
      case "decrement":
        return state.map((elem) =>
          elem.id === action.index && elem.count > 0
            ? elem.count === 1
              ? { ...elem, isAdded: false, count: elem.count - 1 }
              : { ...elem, count: elem.count - 1 }
            : elem
        );
      case "reset-all":
        return state.map((elem) =>
          elem.id < data.length - 1 ? { ...elem, count: 0, isAdded: false } : elem
        );
      default:
        throw new Error();
    }
  }