const ProblemStatusBadge = ({
  status,
}: {
  status: "New Problem" | "In Treatment" | "Solved";
}) => {
  const getClassName = (status: string) => {
    switch (status) {
      case "New Problem":
        return "bg-[#FFECDA] text-[#C46201]";
      case "In Treatment":
        return "bg-bg-primary-soft text-[#1E52DC]";
      case "Solved":
        return "bg-bg-success-soft text-text-success";
    }
  };

  return (
    <div
      className={`px-6 py-3 ${getClassName(status)} rounded-[44px] text-[14px] leading-[100%] font-medium`}
      style={{
        boxShadow: "0px 20px 54px 0px #1E52DB14",
      }}
    >
      {status}
    </div>
  );
};

export default ProblemStatusBadge;
