import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useOutletContext } from "react-router";
import BookingCard from "../BookingCard";

const Srimongol = () => {
  const setRightAside = useOutletContext();
  const [clicked, setClicked] = useState(true);

  const handleClick = () => {
    setClicked(false);
    setRightAside(<BookingCard></BookingCard>);
  };
  return (
    <div className="text-white space-y-4">
      <h1 className="text-7xl font-bold">Srimangal</h1>
      <h3>
        {clicked
          ? ` Srimangal is known as the tea capital of Bangladesh, located
        in the Sylhet division. It is famous for its lush tea gardens, rolling
        green hills, and the unique seven-layer tea. A peaceful destination for
        nature lovers.`
          : `Srimangal, often referred to as the tea capital of Bangladesh, is located in the picturesque Sylhet division. It is renowned for its endless stretches of lush green tea gardens, rolling hills, and serene natural beauty. The town is especially famous for the unique seven-layer tea, a drink that offers different flavors in each sip. Beyond tea, Srimangal is a haven for nature lovers, bird watchers, and adventure seekers. Visitors can explore Lawachara National Park, home to rare wildlife and tropical rainforests. The tranquil environment, cool breeze, and rich biodiversity make Srimangal a perfect retreat from the chaos of urban life.`}
      </h3>
      {clicked && (
        <button
          onClick={handleClick}
          className="btn btn-primary text-black py-3 px-4"
        >
          Booking <FaArrowRightLong />
        </button>
      )}
    </div>
  );
};

export default Srimongol;
