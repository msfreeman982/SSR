import Partnerblock from '../../common/PartnerBlock/PartnerBlock';

const dataPartner = [
  {
    title: 'Tailored solutions',
    description: 'Maximize your investments with growth potential and/or regular long-term income',
  },
  {
    title: '',
    description: '',
  },
  {
    title: '',
    description: '',
  },
  {
    title: '',
    description: '',
  },
]

const Partner = () => (
    <section>
      <h2 className="text-center">Partner Information</h2>
      <div className="grid grid-cols-4 grid-cols-[295px,295px,295px,295px] mt-[70px]">
        <div className="rounded-20px bg-[#F6F5F1] gap-[20px] w-[295px]">
          <Partnerblock title="" description="" />
        </div>
      </div>
    </section>
);
  
export default Partner;