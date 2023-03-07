import { useEffect, useState } from "react";
import numeral from "numeral";
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
    const { id, user, tweets, followers, avatar } = item;
 const KEY_FOLLOWERS = `user${id}.followers:`;
    const KEY_ACTIVE = `user${id}.active:`;
 const [follower, setFollower] = useState(() => {
  return JSON.parse(localStorage.getItem(KEY_FOLLOWERS)) ?? followers;
 });
 const [active, setActive] = useState(() => {
  return JSON.parse(localStorage.getItem(KEY_ACTIVE)) ?? false;
 });

 useEffect(() => {
 if(follower && active){  localStorage.setItem(KEY_FOLLOWERS, JSON.stringify(follower));
 localStorage.setItem(KEY_ACTIVE, JSON.stringify(active));}

 }, [KEY_FOLLOWERS, KEY_ACTIVE, follower, active]);

 const toggleBtn = () => {
  if (!active) {
   setFollower(follower => follower + 1);
   setActive(!active);
  } else {
   setFollower((follower) => follower - 1);
   setActive(!active);
  }
 };
 const numberFormat = numeral(follower).format("0,0");
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
     <Text>{numberFormat} Followers</Text>
    </BoxInfo>
    {active ? (
     <Btn active={active} type="button" onClick={toggleBtn}>
      Following
     </Btn>
    ) : (
     <Btn type="button" onClick={toggleBtn}>
      Follow
     </Btn>
    )}
   </Container>
  </div>
 );
};
