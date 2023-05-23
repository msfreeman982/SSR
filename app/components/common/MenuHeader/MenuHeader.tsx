import './menuHeader.scss';

const MenuHeader = (props) => (
    <nav>
        <ul className="menu">
            {props.data.map((item) =>{
                return <li className="menu__list">{item.listName}</li>
            })}
        </ul>
    </nav>
);
  
export default MenuHeader;