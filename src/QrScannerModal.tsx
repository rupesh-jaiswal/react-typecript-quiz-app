import React, { useEffect, useState } from 'react';
import { fetchQuestions, Difficulty, QuestionState} from './API';
// Components
import QuestionCard from './components/QuestionCard';
import { GlobalStyle, Wrapper} from './App.styles';
import QrScanner from 'qr-scanner';

export type AnswerObject = {
  question:string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 2;
const Qrscan = () => {
    let qrScanner: QrScanner | null = null;
    const [camList, setCamList] = useState<any[]>([]);

    const getCameras = async() => {
        const camList: ((prevState: never[]) => never[]) | { id: string; label: string; }[] =[];
        const cameras = await QrScanner.listCameras(true);
        cameras.forEach((camera,index) => {
            camList.push({
                id: camera.id,
                label: camera.label,
            });

            if(index === cameras.length-1) {
                setCamList(camList);
                alert(JSON.stringify(camList));

            }  
        });
    };

  useEffect(() => {
    const videoElem = document.getElementById("qr-scan-window");
    if(videoElem) {
        const cameraList = getCameras();
        qrScanner = new QrScanner(
            videoElem as HTMLVideoElement,
            (result: any) => console.log('decoded qr code:', result),
            { /* your options or returnDetailedScanResult: true if you're not specifying any other options */ },
        );
        
        qrScanner.start();
    }


    return () => {
        if(qrScanner) {
            qrScanner.stop();
            qrScanner.destroy();
        }
        
    }
  }, [])
  const onCameraChange = (event: { target: { value: string; }; }) => {
    qrScanner?.setCamera(event?.target.value);
  };
  return (
    <>
        <GlobalStyle/>
        <Wrapper>
        <h1> QrScanner</h1>
        <video id = "qr-scan-window"></video>

        <select onChange={onCameraChange} >
            {camList.map((cam: any) => {
                return (<option value={cam.id}>{cam.label}</option>)
            })}
        </select>
        </Wrapper>
    </>
  );
}

export default Qrscan;
