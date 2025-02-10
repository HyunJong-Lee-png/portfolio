import { CakeIcon, Mail, MapPin, Phone, School, UserSquare2Icon } from "lucide-react";
import Profile from "./Profile";
import Line from "./Line";

const ITEMS = [{
  image: <UserSquare2Icon size={50} />,
  title: '이름',
  description: '이현종'
}, {
  image: <CakeIcon size={50} />,
  title: '생년월일',
  description: '1992-10-09'
}, {
  image: <MapPin size={50} />,
  title: '위치',
  description: '서울특별시 관악구'
}, {
  image: <Phone size={50} />,
  title: '연락처',
  description: '010-9954-0690'
},
{
  image: <Mail size={50} />,
  title: '이메일',
  description: 'cjswoxoddl21@gmail.com'
}, {
  image: <School size={50} />,
  title: '학력',
  description: '홍익대학교 컴퓨터공학과(서울)'
}];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="w-[80%] mx-auto text-center">
        <Line content="About me" />
        <p className="mt-10 max-w-3xl mx-auto grid md:grid-cols-2 gap-5 lg:grid-cols-3 sm:grid-cols-1">
          {ITEMS.map((item, i) => <Profile key={i} {...item} />)}
        </p>
      </div>
    </section>
  );
};

export default About;