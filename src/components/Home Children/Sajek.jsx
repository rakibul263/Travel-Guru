import { FaArrowRightLong } from "react-icons/fa6";
import BookingCard from "../../components/BookingCard";
import { useOutletContext } from "react-router";
import { useState } from "react";

const Sajek = () => {
  const setRightAside = useOutletContext();
  const [clicked, setClicked] = useState(true);

  const handleClick = () => {
    setClicked(false);
    setRightAside(<BookingCard />);
  };

  return (
    <div className="text-white space-y-4">
      <h1 className="text-7xl font-bold">Sajek</h1>

      <h3 className="text-justify">
        {clicked
          ? "Sajek Valley is one of the most popular tourist destinations in Bangladesh, located in the Rangamati district. Known as the “Queen of Hills,” Sajek is famous for its stunning natural beauty, serene atmosphere, and sea of clouds."
          : "Sajek Valley is one of the most breathtaking tourist destinations in Bangladesh, situated in the Rangamati district. Known as the “Queen of Hills,” Sajek offers a mesmerizing blend of lush green hills, dense forests, winding mountain roads, and the magical sea of clouds. It's an ideal escape from city life and a paradise for photographers, nature lovers, and adventurers alike. The valley becomes especially charming at dawn and dusk, making it a perfect destination for romantic getaways and peaceful retreats."}
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

export default Sajek;
