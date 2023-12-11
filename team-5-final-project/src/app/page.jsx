import Link from "next/link";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-evenly ml-6 lg:flex lg:mx-40">
      <h1 className="leading-snug text-5xl font-bold lg:text-7xl lg:max-w-3xl lg:leading-snug">
        Tech Talent, Charitable{" "}
        <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">Hearts</span>
      </h1>

      <div className="flex flex-col justify-between lg:flex lg:flex-row-reverse lg:align-bottom">
        <p className="text-4xl font-bold mb-10 lg:max-w-2xl lg:mr-24 lg:leading-snug">
          Building Websites, Transforming Lives with Every Line of Code
        </p>
        <button className="button bg-red-400 font-bold rounded w-44 h-16 text-xl lg:w-56 lg:text-2xl lg:mt-4">
          <Link href={"../developers"}>Join us</Link>{" "}
        </button>
      </div>
    </div>
  );
}

/*


*/
//     <div>
//       <Navbar />
//       <div className="headerContainer sm:grid sm:grid-cols-1 sm:grid-rows-3 sm:gap-4 md:grid-cols-4 relative">
//         <Image
//           src={landingPic}
//           alt="landing"
//           width={500}
//           className="headerImage"
//         />
//         <div className="headerText1 sm:col-span-1 md:col-span-2 absolute top-4 left-0 right-0 bottom-30 flex flex-col justify-center">
//           <h2 className="subTitle1 text-3xl pl-3 pb-3 text-white">We are</h2>
//           <h1 className="subTitle2 text-4xl font-bold pl-3 pb-4 text-white">
//             Tech For Good
//           </h1>
//           <h4 className="subTitle3 text-xl pl-3 text-white">
//             Empowering Causes, Building Futures Tech for Good, Websites for
//             Change.
//           </h4>
//         </div>

//         <div className="section flex flex-col justify-center items-center border border-black rounded-lg p-2 m-2 bg-yellow-100">
//           <h2 className="subTitle text-2xl font-bold p-2">Charities</h2>
//           <p>
//             Click Below to Elevate Your Mission, Delete Online Barriers Now.
//             Learn more about how to apply.
//           </p>
//           <button className="button m-3">
//             <Link href={"../charity"}>Find out More</Link>
//           </button>
//         </div>

//         <div className="section flex flex-col justify-center items-center border border-black rounded-lg p-2 m-2 bg-yellow-100">
//           <h2 className="subTitle text-2xl font-bold p-2">Developers</h2>
//           <p>
//             Discover How Tech for Good Translates Your Vision into a Dynamic
//             Online Presence. Click Below to Explore the Process.
//           </p>
//           <button className="button m-3">
//             <Link href={"../developers"}>Find out More</Link>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
