import './__nutritionIcon.scss';
import CaloriesIcon from '../../assets/calories_icon.png';
import ProteinIcon from '../../assets/protein_icon.png';
import CarbsIcon from '../../assets/carbs_icon.png';
import FatIcon from '../../assets/fat_icon.png';

/**
 * Nutrition icons
 * @param {string} type @example calories, proteines, glucides, lipides
 * @param {object} data values depending of type of nutrition element
 * @component create the nutrition icons with an img and the values
 */

export default function NutritionIcon({ type, data }) {
  const typeText = type.charAt(0).toUpperCase() + type.slice(1);
  const nutriValue = {
    calories: data.calorieCount,
    glucides: data.carbohydrateCount,
    proteines: data.proteinCount,
    lipides: data.lipidCount,
  };

  const img = (type) => {
    switch (type) {
      case 'calories':
        return <img src={CaloriesIcon} alt="" />;
      case 'proteines':
        return <img src={ProteinIcon} alt="" />;
      case 'glucides':
        return <img src={CarbsIcon} alt="" />;
      case 'lipides':
        return <img src={FatIcon} alt="" />;
      default:
        return <h1>No img match</h1>;
    }
  };

  return (
    <div className="nutritionIcon">
      {img(type)}
      <div className="nutritionIcon__text">
        <p className="nutritionIcon__text--value">
          {nutriValue[type]}
          {type === 'calories' ? 'kCal' : 'g'}
        </p>
        <p className="nutritionIcon__text--type">{typeText}</p>
      </div>
    </div>
  );
}
