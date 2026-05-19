
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


