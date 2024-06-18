// src/store/yourReducer.ts
const initialState = {
    propertyName: "",
    premadeList: "",
    textLimit: "",
    language: "english",
    generateSummary:"",
    regenerateSummary:"",
    socialMediaCaption:"",
    projectName:"",
    location:"",
    propertyType:"",
    status:"",
    price:"",
    floorArea:"",
    bedRoomNodes:"",
    kitchenNotes:"",
    bathRoomNotes:"",
    additionalNotes:"",
    purpose:"",
    premade:true,
  };
  
  export const premadeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SET_DATA_TO_PREMADE":
        const {name,value} = action.payload
            return {
                ...state,
                [name]: value,
            };
      default:
        return state;
    }
  };
  