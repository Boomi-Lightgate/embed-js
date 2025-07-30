export default function ProgressBar(props) {
  const bg = props.bgColor || 'bg-gray-300';
  const fg = props.fgColor || 'bg-boomi-purple';
  const h = props.height || 'h-2';
  const p = props.progress || '10%';
  const o = props.opacity || 'bg-opacity-60';
  const outerClass = `overflow-hidden ${h} text-xs flex rounded ${bg}`;
  const innerClass = `shadow-none flex flex-col text-center whitespace-nowrapjustify-center ${fg} ${o}`;
  const width = { width: p };
  return (
    <>
      <div className="relative pt-1 pr-4">
        <div className={outerClass}>
          <div style={width} className={innerClass}></div>
        </div>
      </div>
    </>
  );
}