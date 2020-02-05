import ActionType from "./ActionType";

export const setSwitchMenu = menu => {
  return {
    type: ActionType.SWITCH_MENU,
    switchMenu: menu
  };
};

export const setOpenMenu = show => {
  return {
    type: ActionType.OPEN_MENU,
    openMenu: show
  };
};

export const setOpenAccount = show => {
  return {
    type: ActionType.OPEN_ACCOUNT,
    openAccount: show
  };
};

export const clickTodoButton = seq => {
  return {
    type: ActionType.TODO_BUTTONS,
    todoButtons: seq
  };
};

export const clickBottomTab = seq => {
  return {
    type: ActionType.BOTTOM_TABS,
    bottomTabs: seq
  };
};

export const setSideMenus = sideMenu => {
  return {
    type: ActionType.SIDE_MENUS,
    sideMenu
  };
};

export const clickWidgetTab = seq => {
  return {
    type: ActionType.WIDGET_TABS,
    widgetTabs: seq
  };
};
