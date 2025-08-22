import { TMenuItem } from "@/types/TDropDownMenu";
import EditIcon from "@/components/Svgs/EditIcon";
import EyeIcon from "@/components/Svgs/EyeIcon";
import TransferIcon from "@/components/Svgs/TransferIcon";
import ArchiveIcon from "@/components/Svgs/ArchiveIcon";
import DeleteIcon from "@/components/Svgs/DeleteIcon";

export const menuItemsSuperAdmin: TMenuItem[] = [
  {
    icon: <EyeIcon />,
    text: "View",
    isLink: false,
    onClick: () => {
      console.log("View");
    },
  },
  {
    icon: <EditIcon />,
    text: "Edit",
    isLink: false,
    onClick: () => {
      console.log("Edit");
    },
  },
  {
    icon: <DeleteIcon />,
    text: "Delete",
    isLink: false,
    onClick: () => {
      console.log("Delete");
    },
  },
  {
    icon: <TransferIcon />,
    text: "Transfer",
    isLink: false,
    onClick: () => {
      console.log("Transfer");
    },
  },
  {
    icon: <ArchiveIcon />,
    text: "Archive",
    isLink: false,
    onClick: () => {
      console.log("Archive");
    },
  },
];

export const menuItems: TMenuItem[] = [
  {
    icon: <EyeIcon />,
    text: "View",
    isLink: true,
    href: "/patients/summary",
    onClick: () => {
      console.log("View");
    },
  },
  {
    icon: <EditIcon />,
    text: "Edit",
    isLink: false,
    onClick: () => {
      console.log("Edit");
    },
  },
  {
    icon: <DeleteIcon />,
    text: "Delete",
    isLink: false,
    onClick: () => {
      console.log("Delete");
    },
  },
  {
    icon: <TransferIcon />,
    text: "Transfer",
    isLink: false,
    onClick: () => {
      console.log("Transfer");
    },
  },
  {
    icon: <ArchiveIcon />,
    text: "Archive",
    isLink: false,
    onClick: () => {
      console.log("Archive");
    },
  },
];
