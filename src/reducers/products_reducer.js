const products_reducer = (state, action) => {
  if (action.type === "a") {
    return console.log("action type");
  }

  throw new Error(`No Matching "${action.type}"" action type`);
};

export default products_reducer;
