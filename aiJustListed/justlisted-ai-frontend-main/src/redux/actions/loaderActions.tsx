export const setloadeActive = () => ({
  type: "SET_LOADER_ACTIVE",
});

export const setloadeDeactive = () => ({
  type: "SET_LOADER_DEACTIVE",
});

export const setSidebarAction = (item: any) => ({
  type: "SET_SIDEBAR_ACTION",
  payload: { item },
});
