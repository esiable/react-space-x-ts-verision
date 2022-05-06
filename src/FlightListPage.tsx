import useFetch from 'use-http'
import { useState, useEffect } from 'react';

import FlightList from "./FlightList";
import FlightListFilters from "./FlightListFilters";

export default function FlightListPage() {
    const {get, loading, data} = useFetch('https://api.spacexdata.com/v3/launches');
    const [launchData, setLaunchData] = useState();
    // Local cache, we dont need overwrite launchData
    //  every time when filter data.
    // Maybe there is other way, @todo
    const [localCache, setLocalCache] = useState();

    useEffect(() => {
        get()
    }, [get]);

    useEffect(() => {
        if (data) {
            setLocalCache(data);
            setLaunchData(data);
        }
    }, [data]);

    if (loading) {
        return <>Loading...</>;
    }

    return (
        <>
            <h2>Launch list</h2>
            <FlightListFilters setLaunchData={setLaunchData} localCache={localCache}/>
            <FlightList launches={launchData}/>
        </>
    );
}
