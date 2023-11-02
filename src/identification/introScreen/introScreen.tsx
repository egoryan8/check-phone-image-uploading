import css from './introScreen.module.css';

interface IntroScreenProps {
  onContinue: () => void;
}

export const IntroScreen = ({onContinue}: IntroScreenProps) => {
  return (
    <div className={css.wrapper}>
      <div className={css.intro}>
        <h1 className={css.title}>Подтвердите персональные данные</h1>
        <ul className={css.steps}>
          <li className={css.step}>
            <span className={css.stepText}>Шаг 1. Cделайте ваше фото</span>
          </li>
          <li className={css.step}>
            <span className={css.stepText}>Шаг 2. Сделайте фото паспорта</span>
          </li>
        </ul>
        <button className={css.button} onClick={onContinue}>Продолжить</button>
      </div>
    </div>
  )
}
