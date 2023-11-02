import {useState, useEffect, useRef} from 'react';
import cn from 'classnames'
import css from './cameraHandler.module.css';

interface CameraHandlerProps {
  setImage: (img: string) => void;
  type: 'user' | 'environment';
  onClose: () => void;
}

export const CameraHandler = ({setImage, type, onClose}: CameraHandlerProps) => {
  const isUserPhoto = type === 'user';
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    let mediaStream;

    const startCamera = async () => {
      try {
        const constraints: MediaStreamConstraints = {
          video: { facingMode: type },
        };

        mediaStream = await navigator.mediaDevices.getUserMedia(constraints);

        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          setStream(mediaStream);
        }
      } catch (error) {
        console.error('Ошибка при доступе к камере:', error);
      }
    };

    startCamera()

    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => {
          track.stop(); // Остановка всех медиа-треков
        });
      }
    };
  }, []);


  const handleCapture = () => {
    if (!videoRef.current) {
      return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const context = canvas.getContext('2d');
    if (context) {
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      setImage(canvas.toDataURL('image/jpeg'));
    }
  };

  return (
    <div className={css.wrapper}>
      <button
        onClick={onClose}
        className={css.closeIcon}
      >Закрыть</button>
      <p className={css.text}>{isUserPhoto ? 'Разместите телефон так, чтобы лицо было в овале' : 'Поместите паспорт в рамку'}</p>
      <video ref={videoRef} autoPlay playsInline className={cn(css.video, {[css.passportVideo]: !isUserPhoto})}/>
      {!isUserPhoto && <div className={css.passportBorder}/>}
      {isUserPhoto && <div className={css.overlay}><div className={css.circleBorder} /></div>}
      <button onClick={handleCapture} className={css.button}/>
    </div>
  );
};

