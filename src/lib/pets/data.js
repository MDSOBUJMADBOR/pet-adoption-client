
export const getAllPets = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses`);
  const data = await res.json(); 
  return data;
};








// import React, { useContext, useState } from "react";
// import { InstallAppsContext } from "../../context/InstalledAppsContext";

// import { Button, Dropdown, Label } from "@heroui/react";

// import callImg from "../../assets/call.png";
// import textImg from "../../assets/text.png";
// import videoImg from "../../assets/video.png";

// const Timeline = () => {
//   const { installedApps } = useContext(InstallAppsContext);

//   const [filterType, setFilterType] = useState("all");

//   const getIcon = (type) => {
//     if (type === "call") return callImg;
//     if (type === "text") return textImg;
//     if (type === "video") return videoImg;
//     return callImg;
//   };

//   const filteredApps =
//     filterType === "all"
//       ? installedApps
//       : installedApps.filter((app) => app.type === filterType);

//   return (
//     <div className="p-6 bg-gray-100">
//       <div className="space-y-4 max-w-7xl mx-auto">
        
//         {/* TITLE */}
//         <h2 className="font-bold text-3xl mt-7">Timeline</h2>

//         {/* FILTER */}
//         {installedApps.length >= 1 && (
//           <div className="flex-none">
//             <Dropdown>
//               <Button aria-label="Filter Timeline" variant="secondary">
//                 Filter: {filterType}
//               </Button>

//               <Dropdown.Popover>
//                 <Dropdown.Menu onAction={(key) => setFilterType(key)}>
//                   <Dropdown.Item id="all" textValue="All">
//                     <Label>All</Label>
//                   </Dropdown.Item>

//                   <Dropdown.Item id="call" textValue="Call">
//                     <Label>Call</Label>
//                   </Dropdown.Item>

//                   <Dropdown.Item id="text" textValue="Text">
//                     <Label>Text</Label>
//                   </Dropdown.Item>

//                   <Dropdown.Item id="video" textValue="Video">
//                     <Label>Video</Label>
//                   </Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown.Popover>
//             </Dropdown>
//           </div>
//         )}

//         {/* EMPTY STATE */}
//         {installedApps.length === 0 ? (
//           <div className="flex flex-col items-center justify-center h-[40vh] text-center bg-white rounded-2xl shadow-md p-8 max-w-4xl mx-auto">
//             <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-full mb-4">
//               <span className="text-4xl">📭</span>
//             </div>

//             <h2 className="text-2xl font-semibold text-gray-700 mb-2">
//               No Data Found
//             </h2>

//             <p className="text-gray-400 mb-4">
//               You don’t have any activity yet. Start interacting to see timeline updates.
//             </p>
//           </div>
//         ) : (
//           /* TIMELINE LIST */
//           filteredApps.map((app, ind) => (
//             <div
//               key={ind}
//               className="flex items-center gap-4 bg-white shadow rounded-xl p-4 hover:shadow-md transition"
//             >
//               {/* ICON */}
//               <img src={getIcon(app.type)} alt="icon" className="w-10 h-10" />

//               {/* TEXT */}
//               <div>
//                 <h2 className="font-semibold text-gray-800">
//                   {app.type === "call" && "Call"}
//                   {app.type === "text" && "Text"}
//                   {app.type === "video" && "Video"}{" "}
//                   <span className="text-gray-500 font-normal">
//                     with {app.name}
//                   </span>
//                 </h2>

//                 <p className="text-sm text-gray-400">
//                   {app.next_due_date}
//                 </p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Timeline;