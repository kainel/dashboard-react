import ActionType from "../actions/ActionType";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ActionType.WIDGET_TABS:
      return clickWidgetTab(state, action);
    default:
      return state;
  }
};

const clickWidgetTab = (state, action) => {
  return Object.assign({}, state, action);
};

export default reducer;
