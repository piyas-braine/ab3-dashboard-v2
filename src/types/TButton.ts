export type TButtonProps = {
    text: string;
    className?: string;
    icon?: React.ReactNode;
    isIcon?: boolean;
    isDisabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
};