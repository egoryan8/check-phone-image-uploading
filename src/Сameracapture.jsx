import {useEffect, useRef, useState} from "react";

function СameraCapture() {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    // Запрашиваем доступ к фронтальной камере
    const constraints = { video: { facingMode: 'environment' } };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((mediaStream) => {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
      })
      .catch((error) => {
        console.error('Ошибка при доступе к камере:', error);
      });
  }, []);

  const handleCapture = () => {
    // Получаем кадр из видеопотока
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    // Отображаем кадр в элементе img
    const capturedImage = new Image();
    capturedImage.src = canvas.toDataURL('image/jpeg');
    document.body.appendChild(capturedImage);
  };

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline />
      <button onClick={handleCapture}>Захватить кадр</button>
    </div>
  );
}

export default СameraCapture;
