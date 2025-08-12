const PatientFitBadge = ({ status }: { status: string }) => {
  const getPlayerFitColor = (status: string) => {
    switch (status) {
      case "Fit":
        return "bg-bg-success";
      case "Injured":
        return "bg-bg-danger";
      case "Recovery":
        return "bg-bg-warning";
      default:
        return "bg-bg-default-neutral";
    }
  };

  return (
    <div className={`w-2 h-2 rounded-full ${getPlayerFitColor(status)}`}></div>
  );
};

export default PatientFitBadge;
