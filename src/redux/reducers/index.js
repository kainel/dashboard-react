import global from "./global";
import widget from "./widget";

const initialState = {
  global: {
    switchMenu: "Home",
    openMenu: false,
    openAccount: false,
    todoButtons: 0,
    bottomTabs: 0,
    sideMenu: "Dashboard"
  },
  widget: {
    widgetTabs: 0
  }
};

const mainReducer = (state = initialState, action) => {
  return {
    global: global(state.global, action),
    widget: widget(state.widget, action)
  };
};

export default mainReducer;
