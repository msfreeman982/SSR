import Button from "../../library/Button/Button";

const Simulate = () => (
    <section>
      <h2 className="text-black text-center mb-[70px]">Simulate your investment</h2>
      <div className="grid grid-cols-2">
        <div>
        
        </div>
        <div>
          <h4 className="mb-[25px] text-left">Projected value*</h4>
          <p className="text-[14px] mb-[20px] text-[#585858]">At the end of your investment of 0 years, the value of your investment of 0 CHF is estimated at:</p>
          <div className="text-[18px] mb-[20px] text-[#989898]">0 CHF in a medium scenario</div>
          <div className="text-[18px] mb-[20px] text-[#989898]">0 CHF in a low scenario</div>
          <div className="text-[18px] mb-[20px] text-[#989898]">0 CHF in an optimistic scenario</div>
          <div className="text-[12px] text-[#585858]">*These projections do not constitute a contractual commitment.</div>
          <div className="mt-[181px]">
            <Button title="OPEN AN ACCOUNT" />
          </div>
        </div>
      </div>
    </section>
);
  
export default Simulate;