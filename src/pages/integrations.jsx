import { useEffect, useRef } from "react";
import { RenderComponent } from '../../dist/embedkit';
import { useLocation} from "react-router-dom";

export default function IntegrationsPage() {
  const initialized = useRef(false);
  const location = useLocation();
  
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      RenderComponent({
        component: 'Integrations'
      });
    }
  }, []);
  
  return (
    <div id="boomi" key={location.pathname}></div>
  );
}