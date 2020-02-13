const initState = {
  color: "red"
};

const rootReducer = (state = initState, action) => {
  if (action.type === "CHANGE_COLOR") {
    return {
      ...state,
      color: action.color
    };
  } else {
    return {
      ...state
    };
  }
};

export default rootReducer;
