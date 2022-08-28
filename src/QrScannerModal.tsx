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

  useEffect(() => {
    const videoElem = document.getElementById("qr-scan-window");
    if(videoElem) {
        
        qrScanner = new QrScanner(
            videoElem as HTMLVideoElement,
            (result: any) => console.log('decoded qr code:', result),
            { /* your options or returnDetailedScanResult: true if you're not specifying any other options */ },
        );
        
        qrScanner.start().then(() => {
            const camList: ((prevState: never[]) => never[]) | { id: string; label: string; }[] =[];
            QrScanner.listCameras(true).then(cameras => cameras.forEach((camera,index) => {
                camList.push({
                    id: camera.id,
                    label: camera.label,
                });

                if(index === cameras.length-1) {
                    setCamList(camList);
                    alert(JSON.stringify(camList));

                }

                
            }));
        });
    }


    return () => {
        if(qrScanner) {
            qrScanner.stop();
            qrScanner.destroy();
        }
        
    }
  }, [])

  return (
    <>
        <GlobalStyle/>
        <Wrapper>
        <h1> QrScanner</h1>
        <video id = "qr-scan-window"></video>

        
        </Wrapper>
    </>
  );
}

export default Qrscan;
