"use client";

import Input from "./Input";

interface AddressFormData {
  fullName: string;
  contactNumber: string;
  addressLine1: string;
  state: string;
  PinCode: string;
}

interface AddressErrors {
  fullName: string;
  contactNumber: string;
  addressLine1: string;
  state: string;
  PinCode: string;
}

interface PaymentFormData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardHolderName: string;
}

interface PaymentErrors {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardHolderName: string;
}

type TProps = {
  formData: AddressFormData | PaymentFormData;
  errors: AddressErrors | PaymentErrors;
  handleSubmit: (e: React.FormEvent) => void;
  setFormData: (data: any) => void;
};

const Form = ({ formData, errors, handleSubmit, setFormData }: TProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="shadow-md p-2">
      <h1 className="text-2xl font-semibold mb-4">Address Details</h1>
      <form onSubmit={handleSubmit}>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="mb-2">
            <label
              className="text-md text-slate-600 font-semibold"
              htmlFor={key}
            >
              {key === "PinCode" ? "PinCode" : key}:
            </label>
            <div id={key}>
              <Input
                id={key}
                name={key}
                placeholder={`Enter ${key} here`}
                value={value}
                onChange={handleChange}
              />
            </div>
            <p className="error text-sm text-red-600">
              {errors[key as keyof (AddressErrors | PaymentErrors)]}
            </p>
          </div>
        ))}

        <div>
          <button
            type="submit"
            className="bg-primaryBackground text-white p-2 w-full rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
