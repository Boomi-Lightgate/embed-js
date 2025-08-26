import { useEffect, useRef} from 'react';
import { Outlet, useLocation} from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext';
import SideNav from './components/SideNav';
import './main.css';
import BoomiPlugin from '../dist/embedKit';

export default function Root() {
  const { user } = useAuthContext();
  const initialized = useRef(false);
  const location = useLocation();


  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
  
      const boomiAccountId = user?.boomi_account_id;
      const boomiAccountGroup = user?.boomi_account_group;
      console.log("Boomi Account:", boomiAccountId, "Boomi Account Group:", boomiAccountGroup);
  
      if (!boomiAccountId || !boomiAccountGroup) {
        console.warn("Boomi account ID and/or account group is missing. Skipping BoomiPlugin initialization.");
        return;
      }
  
      BoomiPlugin({
        baseUrl: import.meta.env.VITE_API_URL,
        accountId: import.meta.env.VITE_API_ACCOUNT_ID,
        userName: import.meta.env.VITE_API_USERNAME,
        token: import.meta.env.VITE_API_TOKEN,
        authUser: boomiAccountId,
        accountGroup: boomiAccountGroup,
        configFile: '/boomi.config.js',
        ai: {
          enabled: true,
          model: 'gpt-4o-2024-08-06',
          apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        },
      });
    }
  }, [user]);
  
  return (
    <div className="xsell-home">
      <SideNav />
      <div className="lg:pl-64 bg-gray-200">
        <Outlet key={location.pathname} />
      </div>
    </div>
  );
}
