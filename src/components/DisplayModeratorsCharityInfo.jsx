"use client";
import FetchCharityUserPrefById from "@/db-components/FetchCharityUserPrefById";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
//import Link from "next/link";

export default function DisplayModeratorsCharityInfo(id) {
  const router = useRouter();
  //const {id} = router.query;
  const [charity, setCharity] = useState([]);

 
  useEffect(() => {
    FetchCharityUserPrefById(id).then((data) => setCharity(data[0]));
  }, []);

  return (
    <>
      <div className="flex flex-col mr-5">
        <section className="flex-grow">
          {/* Organisation Name */}
          <div className="flex flex-col justify-evenly ml-6 lg:flex lg:mx-40 gap-10">
            <h1 className="mt-5 leading-snug text-5xl font-bold lg:text-5xl lg:max-w-3xl lg:leading-snug ">
              {charity.org_name}
              
            </h1>

            {/* representatives contact details */}
            <div className="flex flex-col justify-between lg:flex lg:flex-row-reverse lg:gap-10 lg:align-bottom">
              <p className="text-md lg:text-lg mb-10 lg:max-w-2xl lg:mr-24 lg:leading-relaxed font-style: italic ml-3">
                {charity.name}
                {charity.suranme}
                {charity.contact_number}
                {charity.charity_reg_no}
               </p>
                        </div>
         
            <button
              onClick={() => router.back()}
              className="button border-4 lg:text-red-400 text-black-400 border-red-400 font-bold rounded w-44 h-10 text-sm lg:w-64 lg:text-lg lg:mt-4 m-2"
            >
              Go Back
            </button>
          </div>
        </section>
      </div>
    </>
  );
              }