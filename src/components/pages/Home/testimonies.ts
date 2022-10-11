import Avatar1 from "../../../assets/images/testimonials/avatar1.png";
import Avatar2 from "../../../assets/images/testimonials/avatar2.png";
import Avatar3 from "../../../assets/images/testimonials/avatar3.png";
import Avatar4 from "../../../assets/images/testimonials/avatar4.png";

const testimonies: {
  id: number;
  image: string;
  comment: string;
  rating: number;
  name: string;
  role: string;
}[] = [
  {
    id: 1,
    comment:
      "If you haven’t tried whitepace yet, you need to give it a shot for your next event. It’s so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
    image: Avatar1,
    name: "Jessie Owner",
    role: "Founder, XYZ Company",
    rating: 5,
  },
  {
    id: 2,
    comment:
      "If you haven’t tried whitepace yet, you need to give it a shot for your next event. It’s so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
    image: Avatar2,
    name: "Frank Edwards",
    role: "Founder, XYZ Company",
    rating: 4,
  },
  {
    id: 3,
    comment:
      "If you haven’t tried whitepace yet, you need to give it a shot for your next event. It’s so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
    image: Avatar3,
    name: "Jesse Marsh",
    role: "Founder, XYZ Company",
    rating: 3,
  },
  {
    id: 4,
    comment:
      "If you haven’t tried whitepace yet, you need to give it a shot for your next event. It’s so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
    image: Avatar4,
    name: "Abel Owner",
    role: "Founder, XYZ Company",
    rating: 5,
  },
];

export default testimonies;
