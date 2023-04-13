import { useToastContext } from '../context/Toast/ToastContext';

type IfuctionProps = (title: string, description: string) => void;

const useToast = () => {
  const { state, dispath } = useToastContext();

  const errorToast: IfuctionProps = (title, description) => {
    if (!state.isShow) {
      dispath({ type: 'ADD_TOAST', payload: { title, description, type: 'error' } });
      setTimeout(() => {
        clearToast();
      }, 3000);
    }
  };
  const succsesToast: IfuctionProps = (title, description) => {
    if (!state.isShow) {
      dispath({ type: 'ADD_TOAST', payload: { title, description, type: 'succses' } });

      setTimeout(() => {
        clearToast();
      }, 3000);
    }
  };
  const clearToast = (): void => {
    dispath({ type: 'CLEAR_TOAST' });
  };

  return { errorToast, succsesToast };
};

export default useToast;
