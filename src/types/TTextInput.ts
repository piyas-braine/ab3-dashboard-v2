import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type TTextInput = {
    name: string;
    labelText?: string;
    placeholder?: string;
    type?: string;
    className?: string;
    iconClassName?: string;
    isIcon?: boolean;
    icon?: React.ReactNode;
    register?: UseFormRegisterReturn;
    error?: FieldError;
    value?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    accept?: string;
}