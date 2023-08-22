import logo from "../../assets/image 5-1.png";
import flag from "../../assets/image 12.png";
import icon1 from "../../assets/mdi_pan-right.png";
import shareIcon from '../../assets/ri_share-line.png' 

type ModalToggling = {
  visible: boolean;
  onClose: () => void;
};

const MyModal = ({ visible, onClose }: ModalToggling) => {

  const handleOnClose = (e: any) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div
      onClick={handleOnClose}
      id="container"
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div data-aos="fade-out" className="bg-white p-20 rounded-3xl flex flex-col gap-3 h-[90%] w-[90%] overflow-y-scroll overflow-x-hidden max-md:p-10 max-md:text-xs">
        <img src={logo} alt="" className="w-[10%] max-lg:w-[30%]" />
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <p>Cookie Lifetime: 30 Days</p>
            <p>Confirmation Period: 6-8 weeks</p>
            <p className="flex flex-row gap-2">
              Country{" "}
              <span>
                <img src={flag} alt="" />
              </span>
            </p>
          </div>

          <div className="flex flex-col">
            <p className=" text-xl font-semibold pb-2 max-md:text-sm">Cashback 3% to 60%</p>
            <div className="flex flex-row">
              <p>MLM:</p>
              <div>
                <p>Level 1: 1,0% to 1.3%</p>
                <p>Level 1: 1,0% to 1.3%</p>
                <p>Level 1: 1,0% to 1.3%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <p className="w-[100%] text-3xl text-center text-green-600 bg-green-100 rounded-full p-2 md:text-xl max-md:text-lg max-sm:text-sm">20% Amazon Gustcheincode Fur Alles exkl. Technik</p>
          <div className="flex flex-row lg:justify-between md:flex-wrap md:justify-center max-md:flex-wrap max-md:justify-center ">
            <div className="flex flex-col gap-3">
              <button className="flex flow-row justify-between bg-gray-500 py-3 px-8 rounded-full font-semibold flex-row items-center">
                Copy<span>Adi2345</span>
              </button>
              <a href="https://www.amazon.com/" target="_blank" className="flex flow-row justify-between bg-green-600 py-3 px-8 rounded-full font-semibold flex-row items-center">
                Go To Amazon Shop
                <span>
                  <img src={icon1} alt="" />
                </span>
              </a>
            </div>
            <div className="flex flex-col gap-2 max-md:items-center md:pt-2 md:justify-center justify-end max-md:pt-2 max-md:justify-center">
              <p>
                Share your link with your friends and earn as if you were
                shopping yourself. Coin7 makes earning money easy!
              </p>
              <button className="w-[20%] max-md:items-center max-md:w-[40%] flex flow-row justify-between bg-gray-200 py-3 px-8 rounded-full font-semibold flex-row">
                <span>
                  <img src={shareIcon} alt="" />
                </span>
                Share
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p>
              To ensure that we can share the commission with you, please use
              the link provided below. This will redirect you directly to the
              corresponding page, in this case, amazon.de. Please ensure that
              you make your purchases without interruption. Please note that
              suggestions from the shop to use their app should be ignored. This
              could prevent us from tracking your purchases and paying out any
              commission. Provision confirmation can only occur after the
              completion of returns and the expiry of the return period.
            </p>

            <h1>Manual entry of order data:</h1>

            <div className="flex flex-row justify-between max-md:flex-wrap md:flex-wrap">
                <div className="flex flex-col gap-3">
                    Date
                    <input type="date" name="Choose Date" id="Choose Date" placeholder="Choose Date" className="border-2 border-gray-300 outline-none p-2 rounded-lg"/>
                </div>
                <div className="flex flex-col gap-3">
                    Order
                    <input type="text" placeholder="Order" className="border-2 border-gray-300 outline-none p-2 rounded-lg"/>
                </div>
                <div className="flex flex-col gap-3">
                Net Purchase Price
                    <input type="text" placeholder="Net purchase" className="border-2 border-gray-300 outline-none p-2 rounded-lg" />
                </div>
                <div className="flex flex-col gap-3">
                Confirmed
                    <input type="text" placeholder="Amount" className="border-2 border-gray-300 outline-none p-2 rounded-lg"/>
                </div>
                <div className="max-sm:h-[3rem] max-sm:mt-3">
                <button className=" bg-slate-500 px-4 rounded-full mt-2 h-[70%] max-md:h-[100%] max-md:mt-2">Go To Order</button>
                </div>
            </div>

            <p className="text-center">Issue!!! If you have used our link and completed your purchase but your provision is not appearing here, please send us an email affiliate@coin7.org detailing your concerns and the necessary documents (invoice). We will forward your request to the responsible shop and clarify all necessary details.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
