import './featuresBlock.scss';

type OptionType = {
    title: string;
    description: string;
};

const Solutionblock = (props: OptionType) => (
    <div className="solutionBlock">
        <div className="solutionBlock__header">
            <div className="solutionBlock__image"></div>
            <div className="solutionBlock__title">{props.title}</div>
        </div>
        <div className="solutionBlock__body">
            <div className="solutionBlock__description">{props.description}</div>
        </div>
    </div>
);
  
export default Solutionblock;