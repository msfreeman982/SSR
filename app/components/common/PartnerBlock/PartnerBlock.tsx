import './partnerBlock.scss'
import Image from 'next/image'
import PartnerImage from '../../../assets/images/Partner.svg'

type OptionType = {
    title: string
    description: string
}

const Partnerblock = (props: OptionType) => (
    <div className="partnerBlock">
        <div className="solutionBlock__image">
            <Image className="mx-auto" src={PartnerImage} width={87} height={87} alt="Picture of the author" />
        </div>
        <div className="solutionBlock__title">{props.title}</div>
        <div className="solutionBlock__description">{props.description}</div>
    </div>
)

export default Partnerblock
