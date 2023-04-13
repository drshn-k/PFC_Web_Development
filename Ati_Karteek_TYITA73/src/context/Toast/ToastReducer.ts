type State = { type: string; title: string; description: string };
type Action = { type: string; payload: any };

const toastReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        type: action.payload.type,
        title: action.payload.title,
        description: action.payload.description,
        isShow: true,
      };
    case 'CLEAR_TOAST':
      return { ...state, isShow: false };
    default:
      return { type: '', description: '', title: '' };
  }
};
export default toastReducer;
