import {
  GET_ONE_ROOM_TYPE,
  GET_ALL_ROOM_TYPES
} from "./const";

const initialState = {
  all: [
    { 
      id: 2, 
      name: "Suite Junior", 
      price: 500, 
      img: 'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      services: ["Internet", "Buffet", "Confortable Bed & Room", 'Gym Coach'],
    },
    { 
      id: 1, 
      name: "Suite Imperial", 
      price: 1000, 
      img: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      services: ["Internet", "Room Pool", "Daily Yoga Clases", "Buffet", "Room Minder"], 
    },
    { 
      id: 3, 
      name: "Simple", 
      price: 300, 
      img: 'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      services: ["Internet", "Confortable Bed & Room", 'Free Gym', 'English Speakers Everyway'],
    },
  ],
  details: {
    id: 2,
    name: "Suite Imperial", 
    description: "Elegant and comfortable. The 40 m² junior suite rooms at the Geneve Mexico City hotel are spaces decorated in a classic style. They have King Size or two double beds, a living room integrated into the room that gives you extra space to work and rest. They are equipped with Wi-Fi at no additional cost, telephone, screen with satellite programming, safe, and bathroom with amenities.",
    images: [
      { 
        url: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Lorem"      
      },
      { 
        url: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "somewhere2"
      },
      { 
        url: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "somewhere3"
      },
      { 
        url: "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "somewhere4"
      },
      { 
        url: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "somewhere5"
      },
      { 
        url: "https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "somewhere6"
      },
      { 
        url: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "somewhere7"
      },
      { 
        url: "https://images.pexels.com/photos/172872/pexels-photo-172872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "somewhere8"
      },
      { 
        url: "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg",
        alt: "somewhere9"
      },
      { 
        url: "https://images.pexels.com/photos/635041/pexels-photo-635041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "somewhere10"
      },
    ],
    amountFree: 4
  },

}

export const roomTypes = (state = initialState, { type, payload }) => {
  switch (type) {
    default: return state;
  }
};