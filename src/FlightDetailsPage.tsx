import { useParams } from 'react-router-dom';
import useFetch from 'use-http';
import { useEffect } from 'react';
import YouTube from 'react-youtube';
import FlightGallery from './FlightGallery';

export default function FlightDetailsPage() {
  const { id } = useParams();
  const { get, loading, data } = useFetch(`https://api.spacexdata.com/v3/launches/${id}`);

  useEffect(() => {
    get();
  }, [get]);

  if (loading) return <div>Loading ...</div>
  
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Date</th>
            <th>Location</th>
            <th>Rocket</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data?.mission_name}</td>
            <td>{data?.launch_date_utc}</td>
            <td>{data?.launch_site.site_name}</td>
            <td>{data?.rocket.rocket_name}</td>
            <td>{data?.launch_success ? 'success' : 'failure'}</td>
          </tr>
        </tbody>
      </table>
      <h2> Video </h2>
      <YouTube videoId={data?.links && data?.links.youtube_id} />
      <h2>Gallery</h2>
       {data?.links?.flickr_images.lenght > 0 && <FlightGallery images={data?.links?.flickr_images} />}
    </div>
  );;
}
