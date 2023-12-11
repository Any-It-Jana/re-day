import React, { useEffect, useState } from "react";
import Text from "../components/atoms/Text";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import Button from "../components/atoms/Button";
import { createPresinedURL } from "../libs/apis/UploadRecord";
import UserStore from "../libs/store/UserStore";

const RecordPage = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const { isLoggedIn, email } = UserStore();
  const dateKey = `${new Date().toISOString().slice(0, 16)}`;

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/");
  //   }
  // }, []);

  const recorderControls = useAudioRecorder();
  const startRecording = () => {
    let t = 0;
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
      t += 1;
      if (t === 5) {
        recorderControls.stopRecording();
        clearInterval(timer);
        setIsFinished(true);
        // async 함수로 S3에 전송하는 거 필요함
      }
    }, 1000);
  };

  const stopRecording = () => {
    recorderControls.stopRecording();
  };
  const finishRecording = async (blob: Blob) => {
    await createPresinedURL(new File([blob], `${email}_${dateKey}.m4a`));
    navigate(`/loading/${dateKey}`);
  };

  return (
    <article>
      <Text color="white" fontSize={1.5}>
        당신의 하루는 어땠나요?
      </Text>
      <img
        onClick={() => {
          if (recorderControls.isRecording) {
            recorderControls.stopRecording();
          } else {
            recorderControls.startRecording();
            startRecording();
          }
        }}
        src="/mic.svg"
        height={150}
        width={200}
        alt="mic"
      />

      <ProgessWrapper>
        <Div>
          <AudioRecorder
            onRecordingComplete={(blob) => {
              finishRecording(blob);
              console.log(blob);
            }}
            audioTrackConstraints={{
              noiseSuppression: true,
              echoCancellation: true,
            }}
            downloadOnSavePress={true}
            downloadFileExtension="mp3"
            recorderControls={recorderControls}
          />
        </Div>
        <Text color="white" fontSize={1.5}>
          {isFinished
            ? "ㅤ"
            : recorderControls.isRecording === false
            ? "마이크를 눌러 시작하세요!"
            : `${time}초`}
        </Text>
        <ProgressBarBackground>
          <ProgressBar width={`${(time * 100) / 60}%`} />
        </ProgressBarBackground>
      </ProgessWrapper>

      <Button
        style={{ visibility: isFinished ? "visible" : "hidden" }}
        type="bg"
        color="white"
        onClick={stopRecording}>
        분석하기!
      </Button>
    </article>
  );
};

const ProgessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ProgressBarBackground = styled.div`
  width: 80dvw;
  height: 10px;
  border-radius: 5px;
  background-color: #eee;
`;
const ProgressBar = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: 10px;
  border-radius: 5px;
  background-color: #7fec7f;
`;

const Div = styled.div`
  /* height: 0px;
  visibility: hidden; */
`;

export default RecordPage;
