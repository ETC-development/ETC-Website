import "./buttons.css";

export default function Button1() {
  return (
    <div className="bg-[#323232]/70 relative py-4 box-border shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-montserrat font-medium px-8 border-silver-white rounded-full border-[0.25px] cursor-pointer group hover:bg-[#757575]/70">
      <div className="btn-ellipse-blur left-0 bg-cyan "></div>
      <div className="btn-ellipse-blur left-0 !w-16 right-0 bg-green"></div>
      <div className="btn-ellipse-blur right-0 bg-less-dark-green "></div>
      <p className="z-10 text-white relative">Register Now</p>
    </div>
  );
}
