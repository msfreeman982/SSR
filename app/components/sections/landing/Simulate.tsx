import Button from "../../library/Button/Button";
import ToggleSwitch from "../../library/ToggleSwitch/ToggleSwitch";
import Input from "../../library/Input/Input";
import Range from "../../library/Range/Range"

export const styleInput = {
  label: {
      color: "var(--black)",
      fontSize: "16px",
  },
  input: {
      color: "var(--black)",
      background: "var(--white)",
      fontSize: "14px",
      border: "1px solid var(--gray-3)",
  },
  info: {
      color: "var(--gray-2)",
      fontSize: "18px",
  },
  code: {
      background: "var(--gray-10)",
      fontSize: "14px",
      color: "var(--black)",
  },
};

const Simulate = () => (
    <section>
      <h2 className="text-black text-center mb-[70px]">Simulate your investment</h2>
      <div className="grid grid-cols-2">
        <div>
          <div className="w-[411px]">
            <div className="text-[18px] text-[#000000] mb-[23px] font-bold">
              Simulate your investment
            </div>
            <div className="mb-[18px]">
              <div className="text-[16px] text-[#000000] font-normal mb-[15px]">My fortune amounts to...</div>
              <div className="mb-[15px]">
                <Input placeholder="CHF 300" type="text" styleInput={styleInput} />
              </div>
              <Range />
            </div>

            <div className="mb-[18px]">
              <div className="text-[16px] text-[#000000] font-normal mb-[15px]">I would like to invest</div>
              <div className="mb-[15px]">
                <Input placeholder="CHF 0" type="text" styleInput={styleInput} />
              </div>
              <Range />
            </div>

            <div className="mb-[18px]">
              <div className="text-[16px] text-[#000000] font-normal mb-[15px]">For an investment horizon of</div>
              <div className="mb-[15px]">
                <Input placeholder="year(s)" type="text" styleInput={styleInput} />
              </div>
              <Range />
            </div>

            <div className="text-[16px] text-[#000000] font-normal mb-[15px]">When I invest I am rather</div>
            <ToggleSwitch textIsOn={"Conservative"} textIsOff={"Dynamiс"} isOn ={true} />
          </div>
        </div>
        <div>
          <h4 className="mb-[25px] text-left">Projected value*</h4>
          <p className="text-[14px] mb-[20px] text-[#585858]">At the end of your investment of 0 years, the value of your investment of 0 CHF is estimated at:</p>
          <div className="text-[18px] mb-[20px] text-[#989898]">0 CHF in a medium scenario</div>
          <div className="text-[18px] mb-[20px] text-[#989898]">0 CHF in a low scenario</div>
          <div className="text-[18px] mb-[20px] text-[#989898]">0 CHF in an optimistic scenario</div>
          <div className="text-[12px] text-[#585858]">*These projections do not constitute a contractual commitment.</div>
          <div className="mt-[181px]">
            <a href={process.env.REACT_APP_REGISERFLOW_URL}>
              <Button title="OPEN AN ACCOUNT" />
            </a>
          </div>
        </div>
      </div>
    </section>
);
  
export default Simulate;