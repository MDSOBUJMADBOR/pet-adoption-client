"use client"
import { authClient } from '@/lib/auth-client';
import { useEffect, useState } from 'react';



const FormDetails = ({course}) => {
// console.log(course,'course');
const { data : session} = authClient.useSession();
const user = session?.user;

// console.log(user,'user');
 const [formData, setFormData] = useState({   
    petName: course?.petName,
    yourName:"",
    yourEmail: "",
    pickupDate: '',
    message: '',
     createdAt: new Date(),
     status:['Approved','Pending','Rejected'],
  });



// console.log(user?.name,'coursesss');  
useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        yourName: user.name || '',
        yourEmail: user.email || '',
      }));
    }
  }, [user]);
 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
   
  };
 

  const handleSubmit = async (e) => {
    e.preventDefault();
 formData.userId = user.id
    alert('Adoption request submitted successfully! 🎉');
    // console.log('Form Data:', formData);

const res = await fetch('http://localhost:8080/request' , {
  method: "POST",
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData),
})
const data = await res.json();
// console.log(data);

  };


          return (
                

  <form onSubmit={handleSubmit} className="space-y-6 flex-1">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pet Name</label>
                <input
                  type="text"
                  name="petName"
                  disabled
                  value={course?.petName}
                 
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  name="yourName"
                  value={user?.name}
disabled
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-amber-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input
                  type="email"
                  name="yourEmail"
                  disabled
                  // value={formData.yourEmail}
                    value={user?.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-amber-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Date</label>
                <input
                  type="date"
                  name="pickupDate"
                  // value={formData.pickupDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-amber-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  // value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Write a message..."
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-3xl focus:outline-none focus:border-amber-500 resize-y"
                />
              </div>

              <button
           
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 transition-colors text-white font-semibold py-4 rounded-2xl text-lg shadow-lg shadow-emerald-500/30 mt-4"
              >
                Adopt Now
              </button>
            </form> 
          );
};

export default FormDetails;