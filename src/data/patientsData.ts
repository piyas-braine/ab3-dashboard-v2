import patientAvatarImage from "@/assets/images/patients/patient-avatar.png";
import patientAvatarImage2 from "@/assets/images/patients/patient-avatar-2.png";
import patientAvatarImage4 from "@/assets/images/patients/patient-avatar-4.png";
import patientAvatarImage5 from "@/assets/images/medical-specialist-1.png"
import patientAvatarImage6 from "@/assets/images/patients/patient-avatar-6.png";
import patientAvatarImage7 from "@/assets/images/patients/patient-avatar-7.png";
import patientAvatarImage8 from "@/assets/images/patients/patient-avatar-8.png";
import patientAvatarImage9 from "@/assets/images/patients/patient-avatar-9.png";
import patientAvatarImage10 from "@/assets/images/patients/patient-avatar-10.png";

// import organization1Image from "@/assets/images/patients/organization-1.png";
// import organization2Image from "@/assets/images/patients/organization-2.png";
import organization3Image from "@/assets/images/patients/organization-3.png";
import organization4Image from "@/assets/images/organization-4.png";

export const patientsData = [
    {
        patientImage: patientAvatarImage,
        patientName: "Theresa Webb",
        playerFitStatus: "Injured",
        playerJoinDate: "Jan 22, 2025",
        notificationNumber: 4,
        organizations: [{
            id: 1,
            name: "Arsenal",
            image: organization4Image
        }],
        teams: [{
            id: 1,
            name: "U20"
        }, {
            id: 2,
            name: "U19"
        }, {
            id: 3,
            name: "U18"
        }],
        status: "Onboarding",
        lastUpdated: "Feb 15, 2025",
    },
    {
        patientImage: patientAvatarImage4,
        patientName: "Darrell Steward",
        playerFitStatus: "Fit",
        playerJoinDate: "May 22, 2025",
        notificationNumber: 0,
        organizations: [{
            id: 1,
            name: "England",
            image: organization3Image
        }, {
            id: 2,
            name: "Arsenal",
            image: organization4Image
        }],
         teams: [{
            id: 1,
            name: "U19"
        }, {
            id: 2,
            name: "U20"
        }, {
            id: 3,
            name: "U18"
        }],
        status: "Onboarding",
        lastUpdated: "May 25, 2025",
    },
    {
        patientImage: patientAvatarImage2,
        patientName: "Marvin McKinney",
        playerFitStatus: "Recovery",
        playerJoinDate: "May 22, 2025",
        notificationNumber: 2,
        organizations: [{
            id: 1,
            name: "England",
            image: organization3Image
        }, {
            id: 2,
            name: "Arsenal",
            image: organization4Image
        }],
         teams: [{
            id: 1,
            name: "U18"
        }, {
            id: 2,
            name: "U19"
        }, {
            id: 3,
            name: "U20"
        }],
        status: "Active",
        lastUpdated: "May 25, 2025",
    },
    {
        patientImage: patientAvatarImage5,
        patientName: "Brooklyn Simmons",
        playerFitStatus: "Fit",
        playerJoinDate: "May 22, 2025",
        notificationNumber: 0,
        organizations: [{
            id: 1,
            name: "England",
            image: organization3Image
        }, {
            id: 2,
            name: "Arsenal",
            image: organization4Image
        }],
         teams: [{
            id: 1,
            name: "U19"
        }, {
            id: 2,
            name: "U20"
        }, {
            id: 3,
            name: "U18"
        }],
        status: "Active",
        lastUpdated: "May 25, 2025",
    },
    {
        patientImage: patientAvatarImage6,
        patientName: "Lizza Nickson",
        playerFitStatus: "Fit",
        playerJoinDate: "May 22, 2025",
        notificationNumber: 0,
        organizations: [{
            id: 1,
            name: "England",
            image: organization3Image
        }, {
            id: 2,
            name: "Arsenal",
            image: organization4Image
        }],
         teams: [{
            id: 1,
            name: "U18"
        }, {
            id: 2,
            name: "U20"
        }, {
            id: 3,
            name: "U19"
        }],
        status: "In Transfer",
        lastUpdated: "May 25, 2025",
    },
    {
        patientImage: patientAvatarImage8,
        patientName: "Smith Jhonson",
        playerFitStatus: "Injured",
        playerJoinDate: "May 22, 2025",
        notificationNumber: 4,
        organizations: [{
            id: 1,
            name: "Arsenal",
            image: organization4Image
        }],
         teams: [{
            id: 1,
            name: "U20"
        }, {
            id: 2,
            name: "U19"
        }, {
            id: 3,
            name: "U18"
        }],
        status: "In Transfer",
        lastUpdated: "May 25, 2025",
    },
    {
        patientImage: patientAvatarImage7,
        patientName: "Jhon Doe",
        playerFitStatus: "Injured",
        playerJoinDate: "May 22, 2025",
        notificationNumber: 5,
        organizations: [{
            id: 1,
            name: "Arsenal",
            image: organization4Image
        }],
         teams: [{
            id: 1,
            name: "U29"
        }, {
            id: 2,
            name: "U18"
        }, {
            id: 3,
            name: "U20"
        }],
        status: "Transferred",
        lastUpdated: "May 25, 2025",
    },

    {
        patientImage: patientAvatarImage,
        patientName: "Theresa Webb",
        playerFitStatus: "Recovery",
        playerJoinDate: "Jan 22, 2025",
        notificationNumber: 3,
        organizations: [{
            id: 1,
            name: "England",
            image: organization3Image
        }, {
            id: 2,
            name: "Arsenal",
            image: organization4Image
        }],
         teams: [{
            id: 1,
            name: "U20"
        }, {
            id: 2,
            name: "U19"
        }, {
            id: 3,
            name: "U18"
        }],
        status: "Transferred",
        lastUpdated: "Feb 15, 2025",
    },
    {
        patientImage: patientAvatarImage9,
        patientName: "Mickael Johnson",
        playerFitStatus: "Fit",
        playerJoinDate: "May 22, 2025",
        notificationNumber: 0,
        organizations: [{
            id: 1,
            name: "England",
            image: organization3Image
        }, {
            id: 2,
            name: "Arsenal",
            image: organization4Image
        }],
         teams: [{
            id: 1,
            name: "U19"
        }, {
            id: 2,
            name: "U18"
        }, {
            id: 3,
            name: "U20"
        }],
        status: "Archived",
        lastUpdated: "May 25, 2025",
    },
    {
        patientImage: patientAvatarImage10,
        patientName: "Naithen Mickal",
        playerFitStatus: "Fit",
        playerJoinDate: "May 22, 2025",
        notificationNumber: 0,
        organizations: [{
            id: 1,
            name: "Arsenal",
            image: organization4Image
        }],
         teams: [{
            id: 1,
            name: "U20"
        }, {
            id: 2,
            name: "U19"
        }, {
            id: 3,
            name: "U18"
        }],
        status: "Transferred",
        lastUpdated: "May 25, 2025",
    },
];