import { CardItem } from "../CardItem/CardItem";
import users from "../../users.json";
import { List } from "./CardList.styled";

export const CardList = () => {
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
