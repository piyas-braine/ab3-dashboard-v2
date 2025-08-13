export type TMenuItem = {
  icon: React.ReactNode;
  text: string;
  href?: string;
  isLink?: boolean;
  onClick?: () => void;
};

export type TDropDownMenuProps = {
  menuItems: TMenuItem[];
  className?: string;
  style?: React.CSSProperties;
};