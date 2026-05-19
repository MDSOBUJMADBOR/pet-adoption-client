
export const getAllPets = async () => {
  const res = await fetch("http://localhost:8080/courses");
  const data = await res.json();
  return data;
};
