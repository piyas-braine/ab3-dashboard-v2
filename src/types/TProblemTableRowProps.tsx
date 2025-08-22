export type TProblemTableRowProps = {
  _id: string;
  problemName: string;
  problemNumber?: number;
  severity: 'Major' | 'Minor';
  category: 'Injury' | 'Illness';
  isVisibleToPatient: boolean;
  updatedAt: string;
  status: 'New Problem' | 'In Treatment' | 'Solved';
  isLastAction?: boolean;
};