const filter_reducer = (state, action) => {
  if (action.type === "a") {
    return console.log("action type a");
  }

  throw new Error(`No Matching "${action.type}" action type`);
};

export default filter_reducer;
