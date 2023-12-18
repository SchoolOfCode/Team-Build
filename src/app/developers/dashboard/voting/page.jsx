

import DisplayProjectsForVoting from '@/components/DisplayProjectsForVoting';

//clear the cache of projects fetched every 5 seconds?
//export const revalidate = 5;

export default function VotingPage(){
  
  return (
    <div>
     <DisplayProjectsForVoting  />;
       
    </div>
  );
  }












