import TextInputV4 from "@/components/Inputs/TextInputV4";
import CrossIcon from "@/components/Svgs/CrossIcon";
import DiagnosisIcon from "@/components/Svgs/DiagnosisIcon";
import InputSearchIcon from "@/components/Svgs/InputSearchIcon";
import DiagnosisTableHeader from "@/components/Tables/DiagnosisTableHeader";
import DiagnosisTableRow from "@/components/Tables/DiagnosisTableRow";
import H2 from "@/components/Typography/H2";
import H3 from "@/components/Typography/H3";
import TableBodyHeading from "@/components/Typography/TableBodyHeading";
import { useGetAllDiagnosisQuery } from "@/store/apis/Diagnosis";
import { TDiagnosis } from "@/types/TDiagnosis";
import React from "react";

const SearchDiagnosisModal = ({
  selectedDiagnosis,
  setSelectedDiagnosis,
  setIsSearchDiagnosisModalOpen,
}: {
  selectedDiagnosis: TDiagnosis[];
  setSelectedDiagnosis: React.Dispatch<React.SetStateAction<TDiagnosis[]>>;
  setIsSearchDiagnosisModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { data: diagnosisData } = useGetAllDiagnosisQuery(undefined);

  const addDiagnosis = (diagnosis: TDiagnosis) => {
    const isExist = selectedDiagnosis?.find(
      (item: TDiagnosis) => item._id === diagnosis._id
    );

    if (isExist) return;

    setSelectedDiagnosis([...(selectedDiagnosis || []), diagnosis]);
  };

  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-bg-surface-primary p-[30px] max-w-[802px] w-full max-h-[852px] h-[80vh] overflow-y-auto rounded-2xl">
      <H2 className="text-text-heading-dark">Search Diagnosis</H2>

      <div className="mt-8">
        <TextInputV4
          name="searchDiagnosis"
          labelText="Search"
          placeholder="Type code or title of diagnosis"
          isIcon={true}
          icon={<InputSearchIcon isBlue={true} />}
          className="placeholder:!text-text-natural-gray-8"
          labelClassName="text-text-body-light !text-[14px] !leading-[100%] font-medium !pt-[12px]"
        />
      </div>

      <div className="mt-8">
        <H3 className="text-text-heading-dark">List of Codes</H3>

        <div className="mt-4 flex justify-start items-start gap-[84px]">
          <div className="max-w-[220px] w-full mr-1.5 max-h-[556px] h-full overflow-y-auto">
            <div
              className="w-full pl-6 py-[18px] bg-bg-table-head text-text-table-head text-[11px] leading-[16px] tracking-[6%] font-semibold uppercase"
              style={{
                boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
              }}
            >
              all codes
            </div>

            <div>
              {diagnosisData?.data?.map(
                (diagnosis: TDiagnosis, index: number) => {
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
                }
              )}
            </div>
          </div>

          <div className="w-full">
            <DiagnosisTableHeader />

            <div>
              {selectedDiagnosis?.map((diagnosis, index) => {
                return (
                  <DiagnosisTableRow
                    key={index}
                    _id={diagnosis._id}
                    diagnosisCode={diagnosis.diagnosisCode}
                    diagnosisName={diagnosis.diagnosisName}
                    selectedDiagnosis={selectedDiagnosis}
                    setSelectedDiagnosis={setSelectedDiagnosis}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setIsSearchDiagnosisModalOpen(false)}
        className="absolute top-[30px] right-[30px] w-5 h-5 cursor-pointer"
      >
        <CrossIcon className="fill-[#1E52DC]" />
      </div>
    </div>
  );
};

export default SearchDiagnosisModal;
