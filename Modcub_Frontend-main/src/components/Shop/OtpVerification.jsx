import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // For notifications
import { server } from '../../server';
import { BeatLoader } from 'react-spinners';

const OtpVerification = ({ orderId, onClose,onOtpVerified }) => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!otp) {
      toast.error('Please enter an OTP.');
      setLoading(false);
      return;
    }
    // otp length validation
    if (otp.length !== 6) {
      toast.error('Please enter a valid OTP.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${server}/order/verify-otp/${orderId}`, { otp });
      if (response.data.success) {
        toast.success('OTP verified successfully!');
        onOtpVerified();
        onClose(); // Close the modal on success
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred.');
      toast.error('Failed to verify OTP.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-semibold mb-4">Verify OTP</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="otp" className="block text-sm font-medium mb-1">Enter OTP:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={handleOtpChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter OTP"
            //   required
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white py-2 px-4 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`bg-blue-500 text-white py-2 px-4 rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? <BeatLoader color="white" size={8} /> : 'Verify'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
