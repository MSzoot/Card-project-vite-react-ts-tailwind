export default function Info() {
  return (
    <div className="my-6 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold tracking-tight text-white  ">
        Laura Smith
      </h1>
      <p className="text-xs text-[#F3BF99]">Frontend Developer</p>
      <a href="#blank" className="mt-2 text-[9px] text-[#F5F5F5]">
        laurasmith.website
      </a>
      <div className="mt-4 flex gap-6 text-xs">
        <button className="w-[115px] rounded-lg bg-white py-2  text-black">
          Email
        </button>
        <button className="w-[115px] rounded-lg bg-[#5093E2] py-2 text-white">
          LinkedIn
        </button>
      </div>
    </div>
  );
}
