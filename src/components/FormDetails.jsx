"use client"
import { authClient } from '@/lib/auth-client';
import { useState } from 'react';
// import { fetchSingleCourse } from '@/lib/pets/data';


const FormDetails = () => {
// const { id } = await params;
// console.log(id,"id");
// const course = await fetchSingleCourse()
// console.log(course);
 const [formData, setFormData] = useState({
    petName: '',
    yourName: '',
    yourEmail: '',
    pickupDate: '',
    message: '',
  });
const { data : session} = authClient.useSession();
const user = session?.user;
// console.log(user?.name,'coursesss');  
 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
   
  };
 

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Adoption request submitted successfully! 🎉');
    console.log('Form Data:', formData);
  };


          return (
//                     <div>
//  <form  className="space-y-5">

//               <input
//                 name={user?.name}
//                value={user?.name || ""}
//                 disabled
//                 className="w-full p-3 border rounded-xl"
//               />

//               <input
//                 name="yourName"
//                 placeholder="Your Name"
               
//                 className="w-full p-3 border rounded-xl"
//                 required
//               />

//               <input
//                 name="yourEmail"
//                 type="email"
//                 placeholder="Your Email"
                
//                 className="w-full p-3 border rounded-xl"
//                 required
//               />

//               <input
//                 type="date"
//                 name="pickupDate"
              
//                 className="w-full p-3 border rounded-xl"
//                 required
//               />

//               <textarea
//                 name="message"
//                 placeholder="Message"
               
//                 rows={4}
//                 className="w-full p-3 border rounded-xl"
//               />

//               <button
//                 type="submit"
//                 className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl"
//               >
//                 Adopt Now
//               </button>

//             </form>



//                     </div>

  <form onSubmit={handleSubmit} className="space-y-6 flex-1">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pet Name</label>
                <input
                  type="text"
                  name="petName"
                  value={formData.petName}
                 
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  name="yourName"
                  value={user?.name}

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