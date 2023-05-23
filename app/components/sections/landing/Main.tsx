import Image from 'next/image';
import phoneImage from '../../../assets/images/Phone.svg';
import FeaturesBlock from '../../common/FeaturesBlock/FeaturesBlock';

const Main = () => (
    <section>
        <div className="grid grid-cols-2">
            <div>
                <h1 className="mb-92px">Investing in you is what we do best</h1>
                <FeaturesBlock />
            </div>
            <div className="margin-auto">
                <Image
                    src={phoneImage}
                    width={272}
                    height={596}
                    alt="Picture of the author"
                />
            </div>
        </div>
    </section>
);
  
export default Main;