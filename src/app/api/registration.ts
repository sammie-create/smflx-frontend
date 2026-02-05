// import { Registration } from "@/features/admin/registration/types/mapped-types";

// const names = [
//   "Micheal",
//   "Sarah",
//   "John",
//   "Esther",
//   "Tevez",
//   "Shola",
//   "Hassan",
//   "Toke",
//   "Demi",
//   "Helen",
//   "Emmanuel",
//   "Jacob",
// ];
// const genders = ["Male", "Female"];

// export const registrations: Registration[] = Array.from({ length: 50 }).map(
//   (_, i) => ({
//     userId: String(i + 1),
//     eventId: "1",
//     user: {
//       id: String(i + 1),
//       fullName: `${names[i % names.length]} Thompson`,
//       email: "micheal.thompson@email.com",
//       gender: genders[i % genders.length] as "Male" | "Female",
//     },
//     participationMode: i % 3 === 0 ? "ONLINE" : i % 2 === 0 ? "CAMPER" : "NON_CAMPER",
//     paymentStatus: i % 2 === 0 ? "COMPLETED" : "PENDING",
//     accommodationType: i % 2 === 0 ? "HOSTEL" : "SHARED_APARTMENT",
//   }),
// );
