import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const BookingCard = () => {
  return (
    <div className="bg-white p-8 rounded-xl w-full max-w-md shadow-lg space-y-6">
      {/* Origin */}
      <div>
        <label className="text-gray-500 text-sm">Origin</label>
        <input
          type="text"
          value="Dhaka"
          readOnly
          className="w-full mt-1 p-3 rounded-lg bg-gray-100 font-semibold"
        />
      </div>

      {/* Destination */}
      <div>
        <label className="text-gray-500 text-sm">Destination</label>
        <input
          type="text"
          value="Cox’s Bazar"
          readOnly
          className="w-full mt-1 p-3 rounded-lg bg-gray-100 font-semibold"
        />
      </div>

      {/* Date Range */}
      <div className="flex justify-between gap-4">
        <div className="w-1/2">
          <label className="text-gray-500 text-sm">Form</label>
          <div className="relative mt-1">
            <input
              type="text"
              value="01/09"
              readOnly
              className="w-full p-3 rounded-lg bg-gray-100 font-semibold pr-10"
            />
            <FaCalendarAlt className="absolute right-3 top-4 text-gray-600" />
          </div>
        </div>
        <div className="w-1/2">
          <label className="text-gray-500 text-sm">To</label>
          <div className="relative mt-1">
            <input
              type="text"
              value="12/09"
              readOnly
              className="w-full p-3 rounded-lg bg-gray-100 font-semibold pr-10"
            />
            <FaCalendarAlt className="absolute right-3 top-4 text-gray-600" />
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="w-full bg-[#F9A51A] text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 transition duration-200">
        Start Booking
      </button>
    </div>
  );
};

export default BookingCard;
