"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@/components/Form";

interface FormData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardHolderName: string;
}

interface Errors {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardHolderName: string;
}

const AddressDetails = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolderName: "",
  });

  const [errors, setErrors] = useState<Errors>({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolderName: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors: Errors = {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardHolderName: "",
    };

    // Validate required fields
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === "") {
        newErrors[key as keyof Errors] = `${key} is required`;
        valid = false;
      }
    });

    if (formData.cardNumber.trim() === "") {
      newErrors.cardNumber = "Card number is required";
    }

    if (formData.expiryDate.trim() === "") {
      newErrors.expiryDate = "Expiry date is required";
    }

    if (formData.cvv.trim() === "") {
      newErrors.cvv = "CVV is required";
    }

    if (formData.cardHolderName.trim() === "") {
      newErrors.cardHolderName = "Cardholder name is required";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      router.push("/allFood");
      alert("Payment Successful");
    } else {
      alert("Form has errors. Cannot submit.");
    }
  };

  return (
    <div className="flex justify-center p-2">
      <Form
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
};

export default AddressDetails;
