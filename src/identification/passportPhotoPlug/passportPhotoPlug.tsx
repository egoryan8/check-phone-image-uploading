import css from './passportPhotoPlug.module.css';

interface UserPhotoPlugProps {
  onClose: () => void;
}

export const PassportPhotoPlug = ({onClose}: UserPhotoPlugProps) => (
    <div className={css.wrapper}>
      <button
        onClick={onClose}
        className={css.closeIcon}
      >Закрыть</button>
      <p className={css.text}>Поместите паспорт в рамку</p>
      <div className={css.plugImg}>
        <div className={css.border} />
      </div>
    </div>
  )
