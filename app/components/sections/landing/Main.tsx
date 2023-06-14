import Image from 'next/image'
import phoneImage from '../../../assets/images/Phone.png'
import FeaturesBlock from '../../common/FeaturesBlock/FeaturesBlock'
import Button from '../../library/Button/Button'

const Main = () => (
    <section>
        <div className="grid grid-cols-2">
            <div>
                <h1 className="undeline-h1">Investing in you is</h1>
                <h1 className="mb-[62px] undeline-h1-reverse">what we do best</h1>
                <div className="grid grid-cols-2">
                    <FeaturesBlock
                        title="Simplicity"
                        description="Invest with confidence, your investments are managed by us"
                    />
                    <FeaturesBlock
                        title="Transparency"
                        description="Access your investments at any time and benefit from one-time fees of 0.60% per year"
                    />
                </div>
                <div>
                    <FeaturesBlock
                        title="Flexibility"
                        description="Customize your investments according to your desires, at any time"
                    />
                </div>
                <div className="mt-[90px] text-center">
                    <a href={process.env.REACT_APP_REGISERFLOW_URL} className="inline-block">
                        <Button title="OPEN AN ACCOUNT" />
                    </a>
                </div>
            </div>
            <div>
                <Image className="mx-auto" src={phoneImage} width={272} height={596} alt="Picture of the author" />
            </div>
        </div>
    </section>
)

export default Main
