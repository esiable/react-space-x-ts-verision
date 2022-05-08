import { Launch } from "./FlightListTypes";
import { Link } from 'react-router-dom';

type Props = {
  launch: Launch;
};

export default function LaunchRow({ launch }: Props) {

  return (
    <tr key={launch.flight_number}>
      <td>
        <strong>{launch.flight_number}</strong>
      </td>
      <td>{launch.launch_date_local}</td>
      <td>{launch.launch_site.site_name_long}</td>
      <td>{launch.mission_name}</td>
      <td>{launch.rocket.rocket_name}</td>
      <td>{launch.ships.map(ship => ship + ', ')}</td>
      <td>-</td>
      <td>
        <img
          src={launch.ships[0]?.image}
          alt={launch.ships[0]?.name}
          width="100px"
        />
      </td>
      <td> <Link className='link-success' to={`/details/${launch.flight_number}`}><button>details</button></Link></td>
    </tr>
  );
}
