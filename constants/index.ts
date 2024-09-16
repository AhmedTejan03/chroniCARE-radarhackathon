export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-marke.png",
    name: "Dennis Marke",
  },
  {
    image: "/assets/images/dr-smith.png",
    name: "Foday Smith",
  },
  {
    image: "/assets/images/dr-tamba.png",
    name: "Ibrahim Tamba",
  },
  {
    image: "/assets/images/dr-bangura.png",
    name: "Alhassan Bangura",
  },
  {
    image: "/assets/images/dr-caulker.png",
    name: "Janet Caulker",
  },
  {
    image: "/assets/images/dr-francis.png",
    name: "Joe Francis",
  },
  {
    image: "/assets/images/dr-kabba.png",
    name: "Alima Kabba",
  },
  {
    image: "/assets/images/dr-sufian.png",
    name: "Kadie Sufian",
  },
  {
    image: "/assets/images/dr-koroma.png",
    name: "Amin Koroma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
