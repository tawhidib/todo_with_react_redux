import { COLORSELECTED, STATUS } from "./actions";

export const status = (status) => {
  return {
    type: STATUS,
    payload: status,
  };
};

export const colorSelected = (color, isSelected) => {
  return {
    type: COLORSELECTED,
    payload: { color, isSelected },
  };
};
