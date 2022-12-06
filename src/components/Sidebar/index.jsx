import './_sidebar.scss';
import SideIcon from '../SideIcon';

/**
 * Sidebar of app
 * @component lateral bar with links for diferent activities
 */

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <SideIcon image="01" />
        <SideIcon image="02" />
        <SideIcon image="03" />
        <SideIcon image="04" />
      </div>
    </div>
  );
}
