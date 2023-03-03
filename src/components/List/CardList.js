import { useEffect, useState } from "react";
import { CardItem } from "../CardItem/CardItem";
import users from "../../users.json";
import { List } from "./CardList.styled";

export const CardList = () => {
 const [follow, setFollow] = useState(followers);
 const [active, setActive] = useState(false);

 useEffect(() => {
  localStorage.setItem("follow", JSON.stringify(follow));
 }, []);

 const addFollow = () => {
  console.log(follow);
  setFollow((follow) => follow + 1);
  console.log(follow);
  setActive(!active);
 };
 const deleteFollow = () => {
  setFollow((follow) => follow - 1);
  setActive(!active);
 };
 return (
  <List>
   {users.map((user) => (
    <li key={user.id}>
     <CardItem item={user} />
    </li>
   ))}
  </List>
 );
};
