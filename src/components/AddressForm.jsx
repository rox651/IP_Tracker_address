import arrowIcon from "../assets/images/icon-arrow.svg";
export const AddressForm = () => {
  return (
    <form className="flex place-items-center mt-6 justify-center flex-col">
      <h1 className="text-2xl text-white font-medium">IP Address Tracker</h1>

      <div className="mt-5 w-[420px] h-12 text-sm overflow-hidden rounded-[15px] flex justify-between bg-white">
        <input className="px-5 w-full" type="text" placeholder="Search for any IP adress or domain" />
        <button className="bg-black px-5 h-full ">
          <img src={arrowIcon} alt="icon-arrow" />
        </button>
      </div>
    </form>
  );
};
