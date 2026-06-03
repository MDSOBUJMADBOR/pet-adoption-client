// export const getAllPets = async () => {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/courses`
//     );

//     if (!res.ok) return [];

//     return await res.json();
//   } catch (err) {
//     console.log("API fetch failed:", err);
//     return [];
//   }
// };

 
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

export const fetchSingleCourse = async (id,token) => { 
  // console.log(id);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses/${id}`,{
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  const data = await res.json();
  return data;
};






