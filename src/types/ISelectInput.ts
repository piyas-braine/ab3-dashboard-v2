import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type TSelectOption = {
  label: string;
  value: string;
};

export interface ISelectInputProps {
  name: string;
  labelText?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: TSelectOption[];
}