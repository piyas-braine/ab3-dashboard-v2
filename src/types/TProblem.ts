import { TDiagnosis } from "@/types/TDiagnosis"

export type TProblem = {
    _id: string;
    problemName: string;
    dateOfInjury: Date;
    diagnosis: TDiagnosis[];
    category: 'Injury' | 'Illness';
    description: string;
    initialAssessment: string;
    bodyLocation: string;
    problemImage: string;
    severity: 'Major' | 'Minor';
    playingStatus: 'Fit' | 'Injured' | 'In Recovery';
    isVisibleToPatient: boolean;
    visibleTo: 'All' | 'Medics and Mental Health Only' | 'Medics Only';
    status: 'New Problem' | 'In Treatment' | 'Solved';
    createdAt: string;
    updatedAt: string;
};
