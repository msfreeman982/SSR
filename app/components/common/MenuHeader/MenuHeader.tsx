import './menuHeader.scss';

type MenuHeaderType = {
    data: Array<any>;
};

const MenuHeader = (props: MenuHeaderType) => (
    <nav>
        {props.data.map((item) =>{
            <ul className="menu">
                <li className="menu__list">{item.listName}</li>
            </ul>
        })}
    </nav>
);
  
export default MenuHeader;