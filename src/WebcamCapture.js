import React, { useRef, useCallback, useState } from "react"
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { setCameraImage } from "./features/cameraSlice";
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router";
import CloseIcon from '@material-ui/icons/Close';
import { resetCameraImage } from './features/cameraSlice';
import'./WebcamCapture.css';

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",
};

function WebcamCapture() {

    const webcamRef = useRef(null);
    // const [image,setImage] = useState(null);
    const dispatch = useDispatch();

    const history = useHistory();

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));

        history.push('./preview');
        // console.log(imageSrc); //test
        // setImage(imageSrc); //capture screenshot
    }, [webcamRef]);

    const close = () => {
       history.push('./chats');
    };

    return (
        <div className="webcamCapture">

<CloseIcon onClick={close} className="close_icon" />

        <Webcam
        audio={false}
        height= {videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
        />
        
        <RadioButtonUncheckedIcon 
        className='webcamCapture_button'
        onClick={capture}
        fontSize = "large"/>

        {/* <img src={image}/> */}
    </div>
    );
   
   
}

export default WebcamCapture;