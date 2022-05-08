export default function FlightGallery (images : any){
  return  <div>
  { images.map((element, index) => {
    return <img src={element} alt='' key={index} width='15%' />;
  }) }
</div>
}