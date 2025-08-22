import DiagnosisIcon from "@/components/Svgs/DiagnosisIcon";
import TableBodyHeading from "@/components/Typography/TableBodyHeading";
import { useGetAllDiagnosisQuery } from "@/store/apis/Diagnosis";
import { TDiagnosis } from "@/types/TDiagnosis";

const SearchDiagnosisDropdown = ({
  selectedDiagnosis,
  setSelectedDiagnosis,
}: {
  selectedDiagnosis: TDiagnosis[];
  setSelectedDiagnosis: React.Dispatch<React.SetStateAction<TDiagnosis[]>>;
}) => {
  const { data: diagnosisData, isLoading: isLoadingDiagnosis } = useGetAllDiagnosisQuery(undefined);

  const addDiagnosis = (diagnosis: TDiagnosis) => {
    const isExist = selectedDiagnosis?.find(
      (item: TDiagnosis) => item._id === diagnosis._id
    );

    if (isExist) return;

    setSelectedDiagnosis([...(selectedDiagnosis || []), diagnosis]);
  };

  if(isLoadingDiagnosis) {
    return null;
  }

  return (
    <div className="mt-4 bg-bg-default-white w-full flex justify-start items-start gap-[84px] rounded-md">
      <div
        className="w-[250px] mr-1.5 max-h-[200px] h-full add-organization-scrollbar overflow-y-auto"
        style={{
          boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
        }}
      >
        <div
          className="w-full pl-6 py-[18px] bg-bg-table-head text-text-table-head text-[11px] leading-[16px] tracking-[6%] font-semibold uppercase"
          style={{
            boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
          }}
        >
          all codes
        </div>

        <div>
          {diagnosisData?.data?.map((diagnosis: TDiagnosis, index: number) => {
            return (
              <div
                onClick={() => addDiagnosis(diagnosis)}
                key={index}
                className="pl-6 py-3 flex justify-start items-center gap-3 cursor-pointer"
                style={{
                  boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
                }}
              >
                <div className="w-8 h-8 bg-bg-primary-soft flex justify-center items-center gap-3 rounded-full">
                  <div className="w-[17px] h-[14px]">
                    <DiagnosisIcon />
                  </div>
                </div>

                <TableBodyHeading className="text-text-body-light">
                  {diagnosis.diagnosisName}
                </TableBodyHeading>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchDiagnosisDropdown;
