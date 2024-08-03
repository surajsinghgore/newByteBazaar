const FormPage = () => {
  return (
    <div className="w-[80%] m-auto">
      <form action="">
        <div className="">
          <label htmlFor="Contact" className="w-full text-lg">
            Email
          </label>
          <input type="email" name="email" id="Contact" placeholder="email" className="input w-full my-2" />
        </div>
        <div className="">
          <label htmlFor="Delivery" className="w-full text-lg">
            Delivery
          </label>
          <select name="Delivery" id="Delivery" className="input w-full my-2">
            <option value="india">India</option>
          </select>
        </div>

        <div className="flex justify-between gap-2">
          <input type="text" name="text" id="Contact" placeholder="First Name" className="input w-[50%] my-2" />
          <input type="text" name="text" id="Contact" placeholder="last Name (optional)" className="input w-[50%] my-2" />
        </div>

        <div>
          <input type="number" name="mobile" id="mobile" placeholder="Mobile Number" className="input w-full my-2" />
        </div>

        <div>
          <input type="number" name="pincode" id="pincode" placeholder="Pincode" className="input w-full my-2" />
        </div>

        <div>
          <input type="text" name="address" id="address" placeholder="address" className="input w-full my-2" />
        </div>

        <div className="flex justify-between gap-2">
          <input type="text" name="text" id="Contact" placeholder="City" className="input w-[50%] my-2" />
          <input type="text" name="text" id="Contact" placeholder="State" className="input w-[50%] my-2" />
        </div>

        <div className="my-2">
          <div className="border border-[#b9b9b9] rounded-md p-4">
            <label className="flex items-center space-x-2 mb-2">
              <input type="radio" name="payment" className="form-radio text-blue-600" defaultChecked />
              <span>Online Payment</span>
            </label>
            <hr className="my-2 bg-[#b9b9b9]" />
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="form-radio text-blue-600" />
              <span>Cash on Delivery (COD)</span>
            </label>
          </div>
        </div>

        <div>
          <input type="submit" value="Pay Now" className="bg-bgColor-800 w-full text-center p-3 rounded-md text-white hover:bg-slate-950 my-2 cursor-pointer" />
        </div>
      </form>
    </div>
  );
};

export default FormPage;
