import PropTypes from 'prop-types';
import css from './RecipeListItem.module.css';
import { FaClock } from 'react-icons/fa';
import { FaChartPie } from 'react-icons/fa';
import { TbBodyScan } from 'react-icons/tb';
import { SiLevelsdotfyi } from 'react-icons/si';

export const RecipeListItem = ({
  name,
  time,
  servings,
  calories,
  image,
  difficulty,
  isEasy,
}) => {
  const dynamicClassName = isEasy ? css.easy : css.notEasy;

  return (
    <li className={css.recipeListItem}>
      <img src={image} alt="" width="240" />
      <h2>{name}</h2>

      <div className={css.recipeInfo}>
        <div className={css.infoBlock}>
          <FaClock />
          <p>{time} minutes</p>
        </div>

        <div className={css.infoBlock}>
          <FaChartPie />
          <p>{servings} servings</p>
        </div>

        <div className={css.infoBlock}>
          <TbBodyScan />
          <p>{calories} calories</p>
        </div>

        <div className={css.infoBlock}>
          <SiLevelsdotfyi />
          <p>Difficulty: {difficulty}</p>
        </div>

        <span className={dynamicClassName}></span>
      </div>
    </li>
  );
};

RecipeListItem.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  servings: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  isEasy: PropTypes.bool.isRequired,
};
