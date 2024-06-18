// src/store/yourReducer.ts
const initialState = {
  active: false,
  sideBarActive:""
};

export const loaderReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_LOADER_ACTIVE":
      return {
        ...state,
        active: true,
      };
    case "SET_LOADER_DEACTIVE":
      return {
        ...state,
        active: false,
      };
    case "SET_SIDEBAR_ACTION":
      const data = action.payload.item
        
      return {
        ...state,
        sideBarActive: data,
      };
    default:
      return state;
  }
};
