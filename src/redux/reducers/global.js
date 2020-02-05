import ActionType from "../actions/ActionType";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ActionType.SWITCH_MENU:
      return setSwitchMenu(state, action);
    case ActionType.OPEN_MENU:
      return setOpenMenu(state, action);
    case ActionType.OPEN_ACCOUNT:
      return setOpenAccount(state, action);
    case ActionType.TODO_BUTTONS:
      return clickTodoButton(state, action);
    case ActionType.BOTTOM_TABS:
      return clickBottomTab(state, action);
    case ActionType.SIDE_MENUS:
      return setSideMenus(state, action);
    case ActionType.WIDGET_TABS:
      return clickWidgetTab(state, action);
    default:
      return state;
  }
};

const setSwitchMenu = (state, action) => {
  return Object.assign({}, state, action);
};

const setOpenMenu = (state, action) => {
  return Object.assign({}, state, action);
};

const setOpenAccount = (state, action) => {
  return Object.assign({}, state, action);
};

const clickTodoButton = (state, action) => {
  return Object.assign({}, state, action);
};

const clickBottomTab = (state, action) => {
  return Object.assign({}, state, action);
};

const setSideMenus = (state, action) => {
  return Object.assign({}, state, action);
};

const clickWidgetTab = (state, action) => {
  return Object.assign({}, state, action);
};

export default reducer;
