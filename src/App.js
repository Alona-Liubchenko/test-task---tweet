import logo from "./images/logo.png";
import picture from "./images/picture.png";
import boy from "./images/boy.png";

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
 BtnFollowing,
} from "./App.styled";
import { useState } from "react";

function App() {
  const [follow, setFollow] = useState(100500)
  const [active, setActive] = useState(false)
  const addFollow = () => {
    setFollow(follow => follow + 1)
  setActive(!active)}
  const deleteFollow = () => {
    setFollow((follow) => follow - 1)
   setActive(!active);};
 return (
  <div>
   <Container>
    <BoxLogo>
     <img src={logo} alt="GOIT" />
    </BoxLogo>
    <BoxPicture>
     <img src={picture} alt="pictur" />
    </BoxPicture>
    <Line>
     <Avatar>
      <Elips></Elips>
      <Image src={boy} alt="avatar" />
     </Avatar>
    </Line>
    <BoxInfo>
     <Text>777 tweets</Text>
     <Text>{follow} Followers</Text>
    </BoxInfo>
    {active ? (
     <BtnFollowing type="button" onClick={deleteFollow}>
      Following
     </BtnFollowing>
    ) : (
     <Btn type="button" onClick={addFollow}>
      Follow
     </Btn>
    )}
   </Container>
  </div>
 );
}

export default App;
