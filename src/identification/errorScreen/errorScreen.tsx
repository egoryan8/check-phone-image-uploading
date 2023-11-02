import React from 'react';
import css from './errorScreen.module.css';

export const ErrorScreen = () => (
    <div className={css.wrapper}>
      <div className={css.image} />
      <div className={css.title}>Персональные данные не&nbsp;подтверждены</div>
      <div className={css.subtitle}>Чтобы узнать подробности, обратитесь к&nbsp;отправителю</div>
    </div>
  )