"use client";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";

const FormDetails = ({ course }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [formData, setFormData] = useState({
    petName: "",
    yourName: "",
    yourEmail: "",
    pickupDate: "",
    message: "",
    createdAt: new Date(),
    status: "pending",
    ownerEmail: "",
  });

  // ✅ Set initial data
  useEffect(() => {
    if (user && course) {
      setFormData({
        petName: course.petName,
        petId: course._id,
        yourName: user.name || "",
        yourEmail: user.email || "",
        pickupDate: "",
        message: "",
        createdAt: new Date(),
        status: "pending",
        ownerEmail: course.ownerEmail,

      });
    }
  }, [user, course]);

  // ✅ Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔴 Double protection
    if (user?.email === course?.ownerEmail) {
      alert("❌ You cannot adopt your own pet!");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Adoption request submitted!");
      } else {
        alert(data.message || "❌ Failed to submit");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 🔥 ✅ OWNER হলে form show হবে না
  if (user?.email === course?.ownerEmail) {
    return (
      <div className="flex items-center justify-center h-[300px]">
        <div className="bg-white border rounded-2xl p-8 text-center shadow-md max-w-md">
          <h2 className="text-xl font-bold text-red-500 mb-2">
            This is your listing
          </h2>
          <p className="text-gray-600">
            You cannot request adoption for your own pet.
          </p>
        </div>
      </div>
    );
  }

  // ✅ Normal user form
  return (
    <form onSubmit={handleSubmit} className="space-y-6 flex-1">
      
      {/* Pet Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Pet Name</label>
        <input
          type="text"
          value={formData.petName}
          disabled
          className="w-full px-4 py-3 border rounded-2xl"
        />
      </div>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Your Name</label>
        <input
          type="text"
          value={formData.yourName}
          disabled
          className="w-full px-4 py-3 border rounded-2xl"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1">Your Email</label>
        <input
          type="email"
          value={formData.yourEmail}
          disabled
          className="w-full px-4 py-3 border rounded-2xl"
        />
      </div>

      {/* Pickup Date */}
      <div>
        <label className="block text-sm font-medium mb-1">Pickup Date</label>
        <input
          type="date"
          name="pickupDate"
          value={formData.pickupDate}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-2xl"
          required
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border rounded-2xl"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full py-4 rounded-2xl text-white bg-emerald-600 hover:bg-emerald-700"
      >
        Adopt Now
      </button>
    </form>
  );
};

export default FormDetails;