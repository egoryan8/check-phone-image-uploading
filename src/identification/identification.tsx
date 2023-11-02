import {useEffect, useState} from 'react';
import {IntroScreen} from './introScreen/introScreen';
import {CameraHandler} from './cameraHandler/cameraHandler';
import {UserPhotoPlug} from './userPhotoPlug/userPhotoPlug';
import {SuccessScreen} from './successScreen/successScreen';
import {LoaderScreen} from './loaderScreen/loaderScreen';
import {PassportPhotoPlug} from './passportPhotoPlug/passportPhotoPlug';

const PLUG_DURATION = 2000;

type ScreenByStepType = {
  isActive: boolean,
  type?: 'user' | 'environment',
}

type SuccessByStepType = {
  isSuccess: boolean,
  nextStepType?: 'user' | 'environment',
}

export const Identification = () => {
  const [cameraScreen, setCameraScreen] = useState<ScreenByStepType>({ isActive: false});
  const [plug, setPlug] = useState<ScreenByStepType>({isActive: false});
  const [userPhoto, setUserPhoto] = useState('');
  const [passportPhoto, setPassportPhoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState<SuccessByStepType>({isSuccess: false});

  useEffect(() => {
    let timeout;
    if (plug.isActive) {
      timeout = setTimeout(() => {
        setPlug({isActive: false})
        setCameraScreen({isActive: true, type: plug.type})
      }, PLUG_DURATION)
    } else {
      clearTimeout(timeout)
    }
    return () => clearTimeout(timeout)
  }, [plug.isActive])

  useEffect(() => {
    let timeout;
    if (success.isSuccess) {
      timeout = setTimeout(() => {
        setSuccess({isSuccess: false})
        if (success?.nextStepType === 'environment') {
          setPlug( {isActive: true, type: success.nextStepType})
        }
      }, PLUG_DURATION)
    } else {
      clearTimeout(timeout)
    }
    return () => clearTimeout(timeout)
  }, [success.isSuccess])


  const closeCameraScreen = () => {
    setCameraScreen({isActive: false, type: undefined})
  }

  const closePlug = () => {
    setPlug({isActive: false, type: undefined})
  }

  // MOCK
  const captureUserPhoto = (img: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setUserPhoto(img);
      setSuccess({isSuccess: true, nextStepType: 'environment'});
      setIsLoading(false);
      closeCameraScreen();
    }, 2000)
  }

  // MOCK
  const capturePassportPhoto = (img: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setPassportPhoto(img);
      setSuccess({isSuccess: true});
      setIsLoading(false);
      closeCameraScreen();
    }, 2000)
  }


  useEffect(() => {
    console.log(userPhoto)
  }, [userPhoto])


  if (isLoading) {
    return <LoaderScreen/>
  }

  if (cameraScreen.isActive && cameraScreen.type) {
    return <CameraHandler setImage={cameraScreen.type === 'user' ? captureUserPhoto : capturePassportPhoto} type={cameraScreen.type} onClose={closeCameraScreen}/>
  }

  if (plug.isActive && plug.type) {
    return plug.type === 'user' ? <UserPhotoPlug onClose={closePlug}/> : <PassportPhotoPlug onClose={closePlug}/>
  }

  if (success.isSuccess) {
    return <SuccessScreen/>
  }

  return <IntroScreen onContinue={() => setPlug({isActive: true, type: 'user'})}/>
}
