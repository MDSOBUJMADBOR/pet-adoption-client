import { permanentRedirect } from 'next/navigation';


 

const Dashboard = () => {
          permanentRedirect('/user/dashboard/my-requests');
};

export default Dashboard;