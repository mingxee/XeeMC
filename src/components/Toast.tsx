import React from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
}

function ToastComponent({ message, type }: ToastProps) {
  return (
    <div className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ${
      type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`}>
      <p className="text-white">{message}</p>
    </div>
  );
}

export const toast = {
  success: (message: string) => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    
    const root = createRoot(div);
    root.render(<ToastComponent message={message} type="success" />);
    
    setTimeout(() => {
      root.unmount();
      div.remove();
    }, 3000);
  },
  error: (message: string) => {
    // Similar implementation for error toasts
  }
};