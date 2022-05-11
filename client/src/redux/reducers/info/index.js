// import {
//   GET_ONE_ROOM_TYPE,
//   GET_ALL_ROOM_TYPES
// } from "./const";

const initialState = {
  hero: {
    carousel: [
      { 
        image: "",
        alt: "",
        title: "",
        subtitle: "",
        button: "",
        navigate: ""
       },
       { 
        image: "",
        alt: "",
        title: "",
        subtitle: "",
        button: "",
        navigate: ""
       },
       { 
        image: "",
        alt: "",
        title: "",
        subtitle: "",
        button: "",
        navigate: ""
       }
    ]
  },
}

export const info = (state = initialState, { type, payload }) => {
  switch (type) {
    default: return state;
  }
};