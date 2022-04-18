import { object, string, number } from "yup";

import BasicInfo from "./components/BasicInfo";
import Address from "./components/Address";
import AccountInfo from "./components/AccountInfo";
import CompanyInfo from "./components/CompanyInfo";

export default [
  {
    id: "basic",
    component: BasicInfo,
    initialValues: {
      firstName: "",
      lastName: ""
    },
    validationSchema: object().shape({
      firstName: string().required("First Name is required"),
      lastName: string().required("Last Name is required")
    }),
    actionLabel: "Continue"
  },
  {
    id: "address",
    component: Address,
    initialValues: {
      street: "",
      district: "",
      country: ""
    },
    validationSchema: object().shape({
      street: string().required("Street is required"),
      district: string().required("District is required"),
      country: string().required("Country is required")
    }),
    actionLabel: "Continue"
  },
  {
    id: "company",
    component: CompanyInfo,
    initialValues: {
      companyName: "",
      designation: "",
      workedFor: ""
    },
    validationSchema: object().shape({
      companyName: string().required("Company Name is required"),
      designation: string().required("Designation is required"),
      workedFor: number()
        .typeError("Must be a number.")
        .required("Worked For is required")
    }),
    actionLabel: "Continue"
  },
  {
    id: "account",
    component: AccountInfo,
    initialValues: {
      accountName: "",
      accountNumber: "",
      bankName: "",
      sortingNumber: ""
    },
    validationSchema: object().shape({
      accountName: string().required("Account Name is required"),
      accountNumber: string().required("Account Number is required"),
      bankName: string().required("Bank Name is required"),
      sortingNumber: string().required("Sorting Number is required")
    }),
    actionLabel: "Submit"
  }
];
