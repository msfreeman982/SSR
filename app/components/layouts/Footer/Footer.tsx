import './footer.scss';
import Image from 'next/image';
import Logo from '../../../assets/images/FooterLogo.svg';

const Footer = () => (
    <footer>
        <div className="container">
            <div className="grid grid-cols-3 grid-cols-[180px,180px,180px]">
                <div>
                    <Image
                        src={Logo}
                        width={229}
                        height={38}
                        alt="Picture of the author"
                    />
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <div className="gird grid-cols-2 grid-cols-[843px,1fr] mt-[22px]">
                <div>
                    <p>XQ Bank is not a bank. It does not accept deposits.Client funds will be deposited with the partner bank, Cantonal Bank of Zug.</p>
                    <p>XQ Bank Assurances acts as a financial service provider for the promotion of the investment solutions offered by XQ Bank. It acts as a third party within the meaning of article 23 of the LSFIN. This website does not constitute an insurance proposal or an investment proposal by XQ Bank Assurances.</p>
                </div>
                <div>© XQ Bank, Thurgauerstrasse 54CH 8050, Zürich</div>
            </div>
        </div>
    </footer>
);
  
export default Footer;