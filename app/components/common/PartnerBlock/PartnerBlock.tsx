import './partnerBlock.scss';

type OptionType = {
    title: string;
    description: string;
};

const Partnerblock = (props: OptionType) => (
    <div className="partnerBlock">
        <div className="solutionBlock__image"></div>
        <div className="solutionBlock__title">{props.title}</div>
        <div className="solutionBlock__description">{props.description}</div>
    </div>
);
  
export default Partnerblock;