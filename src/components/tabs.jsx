import Card from './card';
import cardImageBg1 from '../assets/images/house1.jpg';
import cardImageBg2 from '../assets/images/house2.jpg';
import cardImageBg3 from '../assets/images/house3.jpg';
import cardImageBg4 from '../assets/images/house4.jpg';
import cardImageBg5 from '../assets/images/house5.jpg';
import cardImageBg6 from '../assets/images/house6.jpg';


const HomeCardComponent = () => {
  return (
    <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-5 m-5 p-5 ">
      <Card
        imageSrc={cardImageBg1}
        title="Milliken Mills East"
        price="$2,580,000"
        address="18 Edgecombe Crt E, Markham, ON"
        floorplan="4 + 2 Beds&nbsp;&nbsp;-&nbsp;&nbsp;6 baths&nbsp;&nbsp;"
      />
      <Card
        imageSrc={cardImageBg2}
        title="Rural Aurora"
        price="$2,198,000"
        address="38 Crane St, Aurora, ON"
        floorplan="4 + 2 Beds&nbsp;&nbsp;-&nbsp;&nbsp;7 baths&nbsp;&nbsp;"
      />
      <Card
        imageSrc={cardImageBg3}
        title="Central Erin Mills"
        price="$1,395,000"
        address="2576 Strathmore Cres, Mississauga, ON"
        floorplan="4 + 1 Beds&nbsp;&nbsp;-&nbsp;&nbsp;4 baths&nbsp;&nbsp;"
      />
      <Card
        imageSrc={cardImageBg4}
        title="Pefferlaw"
        price="$1,883,300"
        address="352 pefferlaw Rd, Georgina, ON"
        floorplan="4 + 2 Beds&nbsp;&nbsp;-&nbsp;&nbsp;5 baths&nbsp;&nbsp;"
      />
      <Card
        imageSrc={cardImageBg5}
        title="Meadowvale"
        price="$1,099,000"
        address="6077 Fullerton Cres, Mississauga, ON"
        floorplan="3 + 1 Beds&nbsp;&nbsp;-&nbsp;&nbsp;4 baths&nbsp;&nbsp;"
      />
      <Card
        imageSrc={cardImageBg6}
        title="Hurontario"
        price="$699,000"
        address="104 5255 Guildwood way"
        floorplan="3 + 1 Beds&nbsp;&nbsp;-&nbsp;&nbsp;4 baths&nbsp;&nbsp;"
      />
    </div>
  );
};



export default HomeCardComponent;
