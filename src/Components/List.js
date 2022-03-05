import Item from "./Item";
import ListItem from "../Data/ListItem";

const List = () => {
  return (
    <main>
      <ul>
        {ListItem.map((item) => <Item
          iconBefore = {item.iconBefore}
          content = {item.content}
          iconAfter = {item.iconAfter}
        />)}
      </ul>
    </main>
  );
}

export default List;