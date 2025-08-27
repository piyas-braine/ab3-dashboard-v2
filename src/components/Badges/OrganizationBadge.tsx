const OrganizationBadge = ({ status }: { status: string }) => {
  const getOrganizationStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-bg-success";
      case "Inactive":
        return "bg-bg-danger";
      case "Pending":
        return "bg-bg-warning";
      default:
        return "bg-bg-default-neutral";
    }
  };

  return (
    <div
      className={`w-2 h-2 rounded-full ${getOrganizationStatusColor(status)}`}
    ></div>
  );
};

export default OrganizationBadge;
