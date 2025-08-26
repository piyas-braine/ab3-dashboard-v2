export type TButtonProps = {
    text: string;
    type?: "button" | "submit" | "reset";
    className?: string;
    textClassName?: string;
    icon?: React.ReactNode;
    isIcon?: boolean;
    isDisabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
};