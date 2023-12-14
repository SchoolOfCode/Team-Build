"use client";

import React, { useState } from 'react';
//import DeveloperDashboard from '../developers/dashboard/page';
//import Developers from '../developers/page';
import InsertVote from '../db-components/InsertVote';
import Link from 'next/link';


// Return the project voting card
export default async function  ProjectVotingCard({project}) {

  //Function that is invoked when the upvote 1 button is clicked. This inserts a votes intersection table, 
  //and adds one to the total_score for the project using a database trigger function.
async function handleClickOne() {
  await InsertVote({ devsId: "bd688fda-9486-4c46-9651-89afb301fe91", project_id: project.project_id, score: 1 })
};

 //Function that is invoked when the upvote 2 button is clicked. This inserts a votes intersection table, 
  //and adds two to the total_score for the project using a database trigger function.
async function handleClickTwo() {
  console.log('hello')
  await InsertVote({ devsId: "bd688fda-9486-4c46-9651-89afb301fe91", project_id: project.project_id, score: 2 })
   };

   return (
    
<div>
    <Link key={project.project_id} href={`../dashboard/voting/${project.project_id}`}>
    <div className='projectDiv'>

     <li>
      <p>{project.title}</p>
      <p>{project.short_desc}</p>
      </li>
      </div>
      </Link>
      <button onClick={handleClickOne}>Vote Up</button>
      <button onClick={handleClickTwo}>Vote Up More</button>
    </div>
 

  );
}