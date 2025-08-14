import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type TTextInput = {
    name: string;
    labelText?: string;
    placeholder?: string;
    type?: string;
    className?: string;
    register?: UseFormRegisterReturn;
    error?: FieldError;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}