import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useOutletContext } from "react-router";
import BookingCard from "../BookingCard";

const Sundorbon = () => {
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
          ? ` The Sundarbans is the largest mangrove forest in the world, located in the southwestern part of Bangladesh. It's home to the majestic Royal Bengal Tiger, diverse wildlife, and intricate river networks. This UNESCO World Heritage Site offers breathtaking natural beauty, rich biodiversity, and a unique ecosystem found nowhere else.`
          : `The Sundarbans, stretching across the delta of the Ganges, Brahmaputra, and Meghna rivers, is the world’s largest mangrove forest and a UNESCO World Heritage Site. Located in the southwestern region of Bangladesh, it is home to the endangered Royal Bengal Tiger, estuarine crocodiles, spotted deer, and a variety of bird species. The forest is interwoven with countless rivers, canals, and tidal waterways, creating a mystical landscape that fascinates ecologists, adventurers, and tourists alike. Its biodiversity, ecological significance, and mysterious beauty make the Sundarbans a natural treasure. It also plays a crucial role in protecting coastal areas from cyclones and tidal surges.`}
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

export default Sundorbon;
