import Partnerblock from '../../common/PartnerBlock/PartnerBlock';

const dataPartner = [
  {
    title: 'Tailored solutions',
    description: 'Maximize your investments with growth potential and/or regular long-term income',
  },
]

const Partner = () => (
    <section>
      <h2 className="text-center">Partner Information</h2>
      <div className="grid grid-cols-4 grid-cols-[295px_295px_295px_295px] mt-[70px]">
        {dataPartner.map(item => {
          return <Partnerblock title={item.title} description={item.description} />
        })}
      </div>
    </section>
);
  
export default Partner;