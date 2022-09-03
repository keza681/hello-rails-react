const GET_GREETING = 'greetings/GET_GREETING';
const url = 'http://localhost:3000/greetings';

// SETUP ACTIONS

export function getGreeting(greeting) {
  return { type: GET_GREETING, greeting };
}

const initialState = {
  message: 'Hallo',
};

// SETUP REDUCERS
export default function reducer(state = initialState, action = {}) {
  const { greeting, type } = action;
  switch (type) {
    case GET_GREETING:
      return { ...greeting };
    default:
      return state;
  }
}

export const getGreetingFromServer = () => async (dispatch) => {
  const response = await fetch(url);
  const greeting = await response.json();
  dispatch(getGreeting(greeting));
};
