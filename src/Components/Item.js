const Item = (props) => {
  return (
      <li><img src={props.iconBefore} alt="-" />{props.content}<img src={props.iconAfter} alt="-" /></li>
  );
}

export default Item;