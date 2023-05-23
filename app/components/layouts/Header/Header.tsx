import './header.scss';
import Image from 'next/image';
import Logo from '../../../assets/images/Logo.svg';
import MenuHeader from '../../../components/common/MenuHeader/MenuHeader';
import Dropdown from '../../library/Dropdown/Dropdown';
import Button from '../../library/Button/Button';

const menuData = [{
    listName: 'General Investment',
    listPath: '',
},
{
    listName: 'Pension',
    listPath: '',
},
{
    listName: 'Savings',
    listPath: '',
},
{
    listName: 'FAQ',
    listPath: '',
},
{
    listName: 'About us',
    listPath: '',
},
]

const Header = () => (
    <header>
        <div className="container">
            <div className="grid grid-cols-4">
                <div>
                    <Image
                        src={Logo}
                        width={229}
                        height={38}
                        alt="Picture of the author"
                    />
                </div>
                <div>
                    <MenuHeader data={menuData} />
                </div>
                <div>
                    <Dropdown />
                </div>
                <div>
                    <Button />
                </div>
            </div>
        </div>
    </header>
);
  
export default Header;