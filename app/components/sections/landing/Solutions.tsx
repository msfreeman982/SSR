import Image from 'next/image'
import SolutionsImage from '../../../assets/images/Solutions.svg'
import PayoutImage from '../../../assets/images/Payout.svg'
import Button from '../../library/Button/Button'

const Solutions = () => (
    <section className="pb-[200px]">
        <h2 className="text-center mb-[50px]">Our solutions</h2>
        <div className="grid grid-cols-2">
            <div>
                <Image src={SolutionsImage} width={467} height={479} alt="Picture of the author" />
            </div>
            <div className="text-center pt-[100px]">
                <h4>Payout plan</h4>
                <p className="text-[#585858] mb-[20px]">To provide a regular income from your capital</p>
                <div className="mb-[15px]">
                    <Button className="mx-auto" title="SELECT" backgroundColor={undefined} />
                </div>
                <div className="mb-[15px]">
                    <Button
                        className="mx-auto"
                        title="LEARN MORE"
                        styleButton={{ fontColor: '#989898', backgroundColor: '#F6F5F1' }}
                        backgroundColor={undefined}
                    />
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 mt-[100px]">
            <div className="text-center pt-[100px]">
                <h4>Invest</h4>
                <p className="text-[#585858] mb-[20px]">To invest your capital with complete peace of mind</p>
                <div className="mb-[15px]">
                    <Button className="mx-auto" title="SELECT" backgroundColor={undefined} />
                </div>
                <div className="mb-[15px]">
                    <Button
                        className="mx-auto"
                        title="LEARN MORE"
                        styleButton={{ fontColor: '#989898', backgroundColor: '#F6F5F1' }}
                        backgroundColor={undefined}
                    />
                </div>
            </div>
            <div>
                <Image src={PayoutImage} width={504} height={373} alt="Picture of the author" />
            </div>
        </div>
    </section>
)

export default Solutions
