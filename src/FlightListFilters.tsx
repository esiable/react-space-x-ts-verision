import { Dispatch, SetStateAction, useState, useEffect } from 'react';

import { Launch } from "./FlightListTypes";

type Props = {
  setLaunchData: Dispatch<SetStateAction<any>>,
  localCache: any
}

export default function FlightListFilters({setLaunchData, localCache}: Props) {
  const [launch, setLaunch] = useState('');
  
  useEffect(() => {
    filterLaunches();
  },[launch])

  function filterLaunches () {
    const filteredData = localCache?.filter(
      item =>item.mission_name.toLowerCase().includes(launch.toLowerCase())
    );

    setLaunchData(filteredData);
  }

  return (
    <>
      <form>
      <input type ="text" name="launch" 
        id='launch'
        onChange={(event) => setLaunch(event.target.value)}
        placeholder='Search for mission'
      />
      </form>
      </>
    );
}
