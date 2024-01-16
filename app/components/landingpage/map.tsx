import { MapIcon, PhoneIcon } from "../svg";

const MapStudio = () => {
  return (
    <div id="contact" className="grid sm:grid-cols-2 gap-10 justify-between sm:px-40 px-8 w-full">
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2315597175016!2d106.6845705751004!3d10.793568889356255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175297c436a271f%3A0x39b460c4c4dab492!2sMala%20Yoga%20Studio!5e0!3m2!1svi!2s!4v1705395396160!5m2!1svi!2s"
          // width={600}
          // height={450}
          style={{ border: 1 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>
      <div className="">
        <p className="text-center text-4xl text-title">
          <span className="italic text-primary font-bold">Mala Yoga</span> in Ho
          Chi Minh City
        </p>
        <div className="text-table grid sm:grid-cols-2 grid-cols-1 gap-8 pt-6 w-full justify-between">
          <div className="flex gap-4">
            <MapIcon className="w-6 h-6 stroke-[1px] stroke-primary" />
            <p>
              2nd floor, 50 Nguyen <br /> Van Nguyen, Tan Dinh, <br />
              District 1
            </p>
          </div>
          <div className="flex gap-4">
            <PhoneIcon className="w-6 h-6 fill-primary stroke-[1px]" />
            <p>090 248 87 05</p>
            {/* <p>namaste@qodeinteractive.com</p> */}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 mt-10 w-full">
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="border-secondary rounded-sm focus:outline-none focus:border-orange-400 border-[0.5px] border-solid py-3 px-5"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Email"
            className="border-secondary rounded-sm focus:outline-none focus:border-orange-400 border-[0.5px] border-solid py-3 px-5"
          />
        </div>
        <div className="w-full">
          <textarea
            name=""
            id=""
            placeholder="Message"
            className="resize-none py-3 px-5 h-[154px] w-full mt-6 border-secondary focus:outline-none focus:border-orange-400 border-[0.5px] border-solid rounded-sm"
          ></textarea>
        </div>
        {/* <button className="text-sm mt-8 px-14 py-3 bg-orange-100 text-orange-500">
          SUBMIT
        </button> */}
        <div className="mt-8 flex flex-col gap-6 text-7xl text-white">
          <div className="group flex items-center justify-center gap-2 py-4 bg-button w-fit overflow-hidden rounded-sm">
            <div className="h-[1px] w-8 group-hover:-translate-x-[14px] duration-300 bg-white"></div>
            <button className="text-white text-[12px] px-4">SUBMIT</button>
            <div className="h-[1px] w-8 group-hover:translate-x-[14px] duration-300 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapStudio;
