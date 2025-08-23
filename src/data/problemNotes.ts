export const problemNotes = [
  {
    id: 1,
    createdAt: "22 April 2024",
    createdBy: "Michal Smith",
    consultantName: "Dr Steve Nickson",
    category: "X-Ray",
    noteDetails:
      "A shoulder injury diagnosis typically begins with a detailed medical history and physical examination to assess pain, range of motion, and strength. Common causes include rotator cuff tears, dislocations, labral tears, tendonitis, bursitis, or fractures. Imaging tests like X-rays, MRI, or ultrasound may be ordered to confirm the extent and nature of the injury. Symptoms such as persistent pain, weakness, stiffness, or a popping sensation can help guide the diagnosis. Early and accurate diagnosis is crucial for effective treatment, which may range from rest and physical therapy to injections or surgical intervention, depending on the severity.",
    seenNumber: 54,
    likeNumber: 42,
    noteReplies: [
      {
        id: 101,
        createdAt: "Apr 23, 2024 at 09:15 AM",
        createdBy: "Sarah Johnson",
        consultantName: "Dr Emily Carter",
        category: "Follow-up",
        noteDetails:
          "The patient was advised to continue with physiotherapy. Improvement noted in shoulder strength but mild pain persists during overhead movements.",
        seenNumber: 12,
        likeNumber: 8,
        noteReplies: [],
      },
      {
        id: 102,
        createdAt: "Apr 25, 2024 at 04:30 PM",
        createdBy: "James Lee",
        consultantName: "Dr Robert Mitchell",
        category: "Observation",
        noteDetails:
          "Recommended additional MRI to rule out labral tear as pain is not subsiding fully after initial treatment.",
        seenNumber: 9,
        likeNumber: 6,
        noteReplies: [],
      },
    ],
  },
  {
    id: 2,
    createdAt: "10 May 2024",
    createdBy: "Sarah Johnson",
    consultantName: "Dr Emily Carter",
    category: "MRI",
    noteDetails:
      "Patient reports persistent lower back pain with occasional numbness radiating to the right leg. MRI scans suggest a herniated lumbar disc. Recommended initial conservative treatment includes physical therapy, posture correction, and anti-inflammatory medication. If symptoms persist, surgical options such as microdiscectomy may be considered.",
    seenNumber: 37,
    likeNumber: 21,
    noteReplies: [
      {
        id: 201,
        createdAt: "May 12, 2024 at 11:05 AM",
        createdBy: "Emma Brown",
        consultantName: "Dr Daniel White",
        category: "Follow-up",
        noteDetails:
          "Patient started physiotherapy sessions. Early reports suggest mild improvement but stiffness remains. Advised to continue sessions for four more weeks.",
        seenNumber: 7,
        likeNumber: 5,
        noteReplies: [],
      },
    ],
  },
  {
    id: 3,
    createdAt: "02 June 2024",
    createdBy: "James Lee",
    consultantName: "Dr Robert Mitchell",
    category: "Ultrasound",
    noteDetails:
      "An abdominal ultrasound was performed due to recurring stomach cramps. Findings indicate mild gallstones without signs of infection. Patient advised dietary modifications and monitoring. Surgical consultation may be required if pain worsens.",
    seenNumber: 18,
    likeNumber: 9,
    noteReplies: [
      {
        id: 301,
        createdAt: "Jun 03, 2024 at 02:20 PM",
        createdBy: "Michal Smith",
        consultantName: "Dr Steve Nickson",
        category: "Observation",
        noteDetails:
          "Patient reported reduced pain after dietary adjustments. Monitoring continues for potential complications.",
        seenNumber: 4,
        likeNumber: 3,
        noteReplies: [],
      },
    ],
  },
  {
    id: 4,
    createdAt: "15 July 2024",
    createdBy: "Emma Brown",
    consultantName: "Dr Daniel White",
    category: "Blood Test",
    noteDetails:
      "Routine blood test results show elevated cholesterol and borderline high blood sugar. Lifestyle changes such as a balanced diet, regular exercise, and reduced sugar intake were advised. Follow-up test scheduled in three months to reassess.",
    seenNumber: 63,
    likeNumber: 48,
    noteReplies: [
      {
        id: 401,
        createdAt: "Jul 16, 2024 at 08:40 AM",
        createdBy: "Sarah Johnson",
        consultantName: "Dr Emily Carter",
        category: "Follow-up",
        noteDetails:
          "Patient has started a low-fat diet plan and reports slight improvement in energy levels. Scheduled for a repeat test in 6 weeks.",
        seenNumber: 11,
        likeNumber: 7,
        noteReplies: [],
      },
      {
        id: 402,
        createdAt: "Jul 20, 2024 at 06:10 PM",
        createdBy: "James Lee",
        consultantName: "Dr Robert Mitchell",
        category: "Observation",
        noteDetails:
          "Encouraged patient to join a supervised exercise program to improve adherence and track progress more effectively.",
        seenNumber: 5,
        likeNumber: 4,
        noteReplies: [],
      },
    ],
  },
];