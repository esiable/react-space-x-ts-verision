import { useState, useEffect } from 'react';
import { Launch, LaunchData } from "./FlightListTypes";

type Props = {
  setLaunchData: LaunchData['setLaunchData'],
  localCache: LaunchData['localCache']
}

export default function FlightListFilters({setLaunchData, localCache}: Props) {
  const [launch, setLaunch] = useState('');
  
  useEffect(() => {
    filterLaunches();
  },[launch])

  function filterLaunches () :void {
    const filteredData = localCache?.filter(
      (item: Launch) =>item.mission_name.toLowerCase().includes(launch.toLowerCase())
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
