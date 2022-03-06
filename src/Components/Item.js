const Item = (props) => {
  return (
      <li className={props.className}><img src={props.iconBefore} alt="-" /><span>{props.content}</span><img src={props.iconAfter} alt="-" /></li>
  );
}

export default Item;