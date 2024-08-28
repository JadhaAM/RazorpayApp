import React from 'react';
import  TAWHero  from  './TWAHero.png'

const RazorpayCheckout = () => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_zyr1Gcf0ChNi6x',
      amount: 1000, // Amount in paise 
      currency: 'INR',
      name: 'Thesis Ace writer',
      description: 'Test Transaction',
      image: TAWHero,
      handler: function (response) {
        alert(`Payment successful: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'Amol Jadhav',
        email: 'amol@example.com',
        contact: '+919098989999',
      },
      theme: {
        color: '#1A56DB',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-8">
      <button
        className="bg-blue-500 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 w-full max-w-xs"
        onClick={displayRazorpay}
      >
        Pay Now
      </button>
    </div>
  )
}
  

export default RazorpayCheckout;
