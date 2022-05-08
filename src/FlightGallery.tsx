export default function FlightGallery (images : any){
  const data = images || [];
  console.log(data);
  return  <div>
  { data.map((element, index) => {
    return <img src={element} alt='' key={index} width='15%' />;
  }) }
</div>
}