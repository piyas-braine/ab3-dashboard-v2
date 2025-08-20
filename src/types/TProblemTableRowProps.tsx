export type TProblemTableRowProps = {
  problemName: string;
  problemNumber: number;
  severity: string;
  category: string;
  patientVisibility: boolean;
  lastUpdated: string;
  status: string;
  isLastAction?: boolean;
};