/** Regular action */

export const getInitalData = (data) => ({
  type: "FETCH_INITAL_DATA",
  data
});

export const addItem = (partNum) => ({
  type: "ADD_ITEM",
  data: partNum
});
