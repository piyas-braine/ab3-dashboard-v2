import PatientInformation from '@/components/patients/summary/PatientInformation';
import PatientProblemRecords from '@/components/patients/summary/PatientProblemRecords';
import PatientSummary from '@/components/patients/summary/PatientSummary';
import React from 'react'

const PatientSummaryPage = () => {
  return (
    <div className="bg-bg-surface-secondary p-[30px]">
        <PatientInformation />

        <PatientSummary />

        <PatientProblemRecords />
    </div>
  )
}

export default PatientSummaryPage;