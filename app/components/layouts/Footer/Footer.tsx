import './footer.scss';
import Image from 'next/image';
import Logo from '../../../assets/images/FooterLogo.svg';
import LinkComponent from '../../../components/library/LinkComponent/LinkComponent';

const Footer = () => (
    <footer>
        <div className="container">
            <div className="grid grid-cols-3 grid-cols-[560px_240px_240px   ]">
                <div>
                    <Image
                        src={Logo}
                        width={229}
                        height={38}
                        alt="Picture of the author"
                    />
                </div>
                <div>
                    <LinkComponent
                        title={"Contact"}
                        item={["Contact", "0800 00 00 00"]}
                    />
                </div>
                <div>
                    <LinkComponent
                        title={"Useful links"}
                        item={["General Investment", "Pension", "Savings", "FAQ", "About us"]}
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 grid-cols-[843px_1fr] text-[#FFF]">
                <div>
                    <p className="mb-[25px]">XQ Bank is not a bank. It does not accept deposits.Client funds will be deposited with the partner bank, Cantonal Bank of Zug.</p>
                    <p>XQ Bank Assurances acts as a financial service provider for the promotion of the investment solutions offered by XQ Bank. It acts as a third party within the meaning of article 23 of the LSFIN. This website does not constitute an insurance proposal or an investment proposal by XQ Bank Assurances.</p>
                </div>
                <div className="text-right">
                    <p>© XQ Bank, Thurgauerstrasse 54CH 8050, Zürich</p>
                </div>
            </div>
        </div>
    </footer>
);
  
export default Footer;