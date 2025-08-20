const ProblemCategoryBadge = ({
  problemNumber,
  problemCategory,
}: {
  problemNumber: number;
  problemCategory: string;
}) => {
  return (
    <div className="px-4 py-2.5 bg-bg-primary-soft flex justify-start items-center gap-2.5 rounded-[44px] ">
      <div className="px-2 py-1 w-[25px] h-6 bg-bg-primary-blue flex justify-center items-center rounded-full">
        <span className="text-text-default-white text-[14px] leading-[16px] font-medium">
          {problemNumber}
        </span>
      </div>

      <h4 className="text-[#1E52DC] text-[14px] leading-[16px] font-medium">
        {problemCategory}
      </h4>
    </div>
  );
};

export default ProblemCategoryBadge;
