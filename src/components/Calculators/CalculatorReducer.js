// To define the initial state and reducer function
export const initialState = {
  activeCalculator: null,
};

export default function reducer(state, action) {
  switch (action.type) {
    case "SHOW_SSS_CONTRIBUTION":
      return {
        ...state,
        showSSSContribution: true,
        showPhilHealth: false,
        showPagibig: false,
      };
    case "SHOW_PHILHEALTH":
      return {
        ...state,
        showSSSContribution: false,
        showPhilHealth: true,
        showPagibig: false,
      };
    case "SHOW_PAGIBIG":
      return {
        ...state,
        showSSSContribution: false,
        showPhilHealth: false,
        showPagibig: true,
      };
    default:
      return state;
  }
}
