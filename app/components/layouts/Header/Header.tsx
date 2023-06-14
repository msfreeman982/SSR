import './header.scss'
import Image from 'next/image'
import Logo from '../../../assets/images/Logo.svg'
import MenuHeader from '../../../components/common/MenuHeader/MenuHeader'
import LanguagePicker from '../../library/LanguagePicker/LanguagePicker'
import Button from '../../library/Button/Button'

const menuData = [
    {
        listName: 'Investment',
        listPath: '/Investment',
    },
    {
        listName: 'Pension',
        listPath: '/Pension',
    },
    {
        listName: 'Savings',
        listPath: '/Savings',
    },
    {
        listName: 'FAQ',
        listPath: '/FAQ',
    },
    {
        listName: 'About us',
        listPath: '/AboutUs',
    },
]

const Header = () => (
    <header>
        <div className="container">
            <div className="grid grid-cols-4 grid-cols-[280px_660px_97px_141px]">
                <div className="pt-[10px]">
                    <Image src={Logo} width={229} height={38} alt="Picture of the author" />
                </div>
                <div className="pt-[15px]">
                    <MenuHeader data={menuData} />
                </div>
                <div className="pt-[20px]">
                    <LanguagePicker />
                </div>
                <div className="pt-[12px]">
                    <Button title="login" minWidth="141px" />
                </div>
            </div>
        </div>
    </header>
)

export default Header
