import './_sidebar.scss';

import YogaIcon from '../../assets/sidebar_icon_01.png';
import SwimmingIcon from '../../assets/sidebar_icon_02.png';
import CyclingIcon from '../../assets/sidebar_icon_03.png';
import GymIcon from '../../assets/sidebar_icon_04.png';
/**
 * Sidebar of app
 * @component lateral bar with links for diferent activities
 */

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img src={YogaIcon} alt="Icon of yoga" />
        <img src={SwimmingIcon} alt="Icon of swimming" />
        <img src={CyclingIcon} alt="Icon of cycling" />
        <img src={GymIcon} alt="Icon of gym" />
      </div>
    </div>
  );
}
