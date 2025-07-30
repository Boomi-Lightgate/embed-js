export default function AjaxLoader({ color, opac_one, opac_two, opac_three }) {
  return (
    <>
      <div className="gap-x-1 flex">
        <div className={`${color} ${opac_one} w-3 h-3 rounded-full animate-bounce first-circle`}></div>
        <div className={`${color} ${opac_two} w-3 h-3 rounded-full animate-bounce second-circle`}></div>
        <div className={`${color} ${opac_three} w-3 h-3 rounded-full animate-bounce third-circle`}></div>
      </div>
    </>
  );
}
