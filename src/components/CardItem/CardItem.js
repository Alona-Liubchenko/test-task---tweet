import { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import picture from "../../images/picture.png";
import {
 Container,
 BoxLogo,
 BoxPicture,
 Line,
 Avatar,
 Elips,
 Image,
 BoxInfo,
 Text,
 Btn,
} from "./CardItem.styled";
export const CardItem = ({ item }) => {
 const { user, tweets, followers, avatar } = item;
 const [follow, setFollow] = useState(followers);
 const [active, setActive] = useState(false);
 useEffect(() => {
  localStorage.setItem("key", JSON.stringify(
    {follow, active}));
  let storage = localStorage.getItem(follow, active);
 if( storage){return JSON.parse(storage)};
 }, [follow, active]);
 const addFollow = () => {
  setFollow((follow) => follow + 1);
  setActive(!active);
 };
 const deleteFollow = () => {
  setFollow((follow) => follow - 1);
  setActive(!active);
 };
 return (
  <div>
   <Container>
    <BoxLogo>
     <img src={logo} alt="GOIT" />
    </BoxLogo>
    <BoxPicture>
     <img src={picture} alt="pictur" />
    </BoxPicture>
    <Line />
    <Avatar>
     <Elips></Elips>
     <Image src={require(`../../images/${avatar}.png`)} alt={user} />
    </Avatar>
    <BoxInfo>
     <Text>{tweets} tweets</Text>
     <Text>{follow} Followers</Text>
    </BoxInfo>
    {active ? (
     <Btn active={active} type="button" onClick={deleteFollow}>
      Following
     </Btn>
    ) : (
     <Btn type="button" onClick={addFollow}>
      Follow
     </Btn>
    )}
   </Container>
  </div>
 );
};
