import css from './userPhotoPlug.module.css';

interface UserPhotoPlugProps {
  onClose: () => void;
}

export const UserPhotoPlug = ({onClose}: UserPhotoPlugProps) => (
    <div className={css.wrapper}>
      <button
        onClick={onClose}
        className={css.closeIcon}
      >Закрыть</button>
      <p className={css.text}>Разместите телефон так, чтобы лицо было в овале</p>
      <div className={css.plugImg} />
      <div className={css.overlay} />
    </div>
  )
