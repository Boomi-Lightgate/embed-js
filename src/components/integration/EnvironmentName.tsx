import { usePlugin } from '../../context/pluginContext';

interface EnvironmentNameProps {
  componentName: string;
  environmentName: string;
  environmentStatus: boolean;
}

const EnvironmentSelect: React.FC<EnvironmentNameProps> = ({
  componentName,
  environmentName,
  environmentStatus
}) => {
  const { boomiConfig} = usePlugin();
  return (
    <div
      className={`rounded-lg px-3 py-1 text-xs font-medium ${
        environmentStatus
          ? 'bg-green-200 text-green-600'
          : 'bg-red-200 text-red-600'
      }`}
    >
      {environmentName}
    </div>
  );
};

export default EnvironmentSelect;
