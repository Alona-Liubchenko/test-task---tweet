import { CardItem } from "../CardItem/CardItem";
import USERS from "../../users.json";
import { List } from "./CardList.styled";

export const CardList = () => {
 return (
  <List>
   {USERS.map((user) => (
    <li key={user.id}>
     <CardItem item={user} />
    </li>
   ))}
  </List>
 );
};
