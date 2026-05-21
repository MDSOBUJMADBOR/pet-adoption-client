"use client";

import { useState, useEffect } from "react";
import { Input, TextArea, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const AddPetPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  // 🔐 Private Route
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  // ✅ Form Submit
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const petData = {
      petName: form.petName.value,
      species: form.species.value,
      breed: form.breed.value,
      age: Number(form.age.value),
      gender: form.gender.value,
      image: form.image.value,
      healthStatus: form.healthStatus.value,
      vaccinationStatus: form.vaccinationStatus.value,
      location: form.location.value,
      adoptionFee: Number(form.adoptionFee.value),
      description: form.description.value,
      ownerEmail: user?.email,
    };

    // 🔥 Console Output
    console.log("Pet Data 👉", petData);

    // 👉 future API call এখানে দিবা
    // await fetch(...)

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4">
      
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl p-8">
        
        <h2 className="text-3xl font-black text-center mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          🐾 Add New Pet
        </h2>

        <form onSubmit={onSubmit} className="space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="space-y-1 w-full">
              <p className="text-sm font-semibold text-slate-600">Pet Name</p>
              <Input className="w-full" name="petName" placeholder="Enter pet name" variant="bordered" required />
            </div>

            <div className="space-y-1 w-full">
              <p className="text-sm font-semibold text-slate-600">Species</p>
              <Input className="w-full" name="species" placeholder="Dog / Cat / Bird" variant="bordered" required />
            </div>

            <div className="space-y-1 w-full">
              <p className="text-sm font-semibold text-slate-600">Breed</p>
              <Input className="w-full" name="breed" placeholder="Enter breed" variant="bordered" required />
            </div>

            <div className="space-y-1 w-full">
              <p className="text-sm font-semibold text-slate-600">Age</p>
              <Input className="w-full" name="age" type="number" placeholder="Age" variant="bordered" required />
            </div>

            <div className="space-y-1 w-full">
              <p className="text-sm font-semibold text-slate-600">Gender</p>
              <Input className="w-full" name="gender" placeholder="Male / Female" variant="bordered" required />
            </div>

            <div className="space-y-1 w-full">
              <p className="text-sm font-semibold text-slate-600">Image URL</p>
              <Input className="w-full" name="image" placeholder="https://..." variant="bordered" required />
            </div>

            <div className="space-y-1 w-full">
              <p className="text-sm font-semibold text-slate-600">Health Status</p>
              <Input className="w-full" name="healthStatus" placeholder="Healthy / Sick" variant="bordered" required />
            </div>

            <div className="space-y-1 w-full">
              <p className="text-sm font-semibold text-slate-600">Vaccination Status</p>
              <Input className="w-full" name="vaccinationStatus" placeholder="Vaccinated / Not" variant="bordered" required />
            </div>

            <div className="space-y-1 w-full">
              <p className="text-sm font-semibold text-slate-600">Location</p>
              <Input className="w-full" name="location" placeholder="City name" variant="bordered" required />
            </div>

            <div className="space-y-1 w-full">
              <p className="text-sm font-semibold text-slate-600">Adoption Fee</p>
              <Input className="w-full" name="adoptionFee" type="number" placeholder="৳" variant="bordered" required />
            </div>

            <div className="space-y-1 w-full">
              <p className="text-sm font-semibold text-slate-600">Owner Email</p>
              <Input className="w-full" value={user?.email || ""} readOnly variant="bordered" />
            </div>

            <div className="space-y-1 md:col-span-2 w-full">
              <p className="text-sm font-semibold text-slate-600">Description</p>
              <TextArea
                className="w-full"
                name="description"
                placeholder="Write details about the pet..."
                variant="bordered"
                required
              />
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="flat"
              className="flex-1 h-14 rounded-2xl font-bold"
              onClick={() => router.back()}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              isLoading={loading}
              className="flex-1 h-14 rounded-2xl font-bold bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg"
            >
              {loading ? "Adding..." : "Add Pet 🚀"}
            </Button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddPetPage;