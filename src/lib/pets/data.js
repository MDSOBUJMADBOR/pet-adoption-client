// import PetDetails from "@/app/(main)/all-pets/[id]/page";


export const getAllPets = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses`);
  const data = await res.json(); 
  return data;
};

export const FetchGetAllPets = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feature`);
  const data = await res.json(); 
  return data;
};

export const fetchSingleCourse = async (id) => {
  console.log(id);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses/${id}`);
  const data = await res.json();
  return data;
};


// import PetDetailsClient from './PetDetailsClient';
// import { fetchSingleCourse } from '@/lib/pets/data';

// export default async function PetDetaisPage({ params }) {
//   const { id } = params;

//   const course = await fetchSingleCourse(id);

//   return <PetDetails course={course} />;
// }