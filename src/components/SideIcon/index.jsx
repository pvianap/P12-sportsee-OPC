import './_sideicon.scss';

/**
 * Side icons
 * @component compose icons for sidebar
 */
export default function SideIcon({ image }) {
  return (
    <img src={`./sidebar_icon_${image}.png`} className="sideicon" alt="" />
  );
}
