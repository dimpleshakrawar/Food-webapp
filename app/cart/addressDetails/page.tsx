"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@/components/Form";

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

const AddressDetails = () => {
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
    } else {
      alert("Form has errors. Cannot submit.");
    }
  };

  return (
    <div className="flex justify-center p-2">
      <Form
        header={"Address Details"}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
};

export default AddressDetails;
