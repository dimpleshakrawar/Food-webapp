"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "./Input";

interface FormData {
  fullName: string;
  contactNumber: string;
  addressLine1: string;
  state: string;
  PinCode: string;
}

interface Errors {
  fullName: string;
  contactNumber: string;
  addressLine1: string;
  state: string;
  PinCode: string;
}

const AddressForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    contactNumber: "",
    addressLine1: "",
    state: "",
    PinCode: "",
  });

  const [errors, setErrors] = useState<Errors>({
    fullName: "",
    contactNumber: "",
    addressLine1: "",
    state: "",
    PinCode: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors: Errors = {
      fullName: "",
      contactNumber: "",
      addressLine1: "",
      state: "",
      PinCode: "",
    };

    // Validate required fields
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === "") {
        newErrors[key as keyof Errors] = `${key} is required`;
        valid = false;
      }
    });

    // Validate contactNumber
    if (!/^\d{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Contact number must be 10 digits";
      valid = false;
    }

    // Validate pinCode
    if (!/^\d{6}$/.test(formData.PinCode)) {
      newErrors.PinCode = "PinCode must be 6 digits";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      router.push("/cart/orderSummary");
      // Proceed with saving address or navigate to the next step
      console.log("Form is valid. Saving address...");
    } else {
      console.log("Form has errors. Cannot submit.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
              {errors[key as keyof Errors]}
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

export default AddressForm;
