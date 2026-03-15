export const initializePaystack = ({ email, amount, onSuccess, onClose, metadata = {} }) => {
  const handler = window.PaystackPop.setup({
    key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    email,
    amount: amount * 100, // Paystack uses kobo
    currency: 'NGN',
    metadata,
    callback: (response) => {
      onSuccess(response);
    },
    onClose: () => {
      onClose && onClose();
    },
  });
  handler.openIframe();
};
