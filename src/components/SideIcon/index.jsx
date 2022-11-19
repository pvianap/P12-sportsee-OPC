import './_sideicon.scss';

export default function SideIcon({ image }) {
  return (
    <img src={`./sidebar_icon_${image}.png`} className="sideicon" alt="" />
  );
}