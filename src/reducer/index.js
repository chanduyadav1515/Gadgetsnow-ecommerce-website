const fullData = {
  allData: "Chandu",
};

const dataReducer = (state = "CHANDU", action) => {
  switch (action.type) {
    case action.type == "CHECK":
      return "chandu yadav";
    default:
      return state;
  }
};

export default dataReducer