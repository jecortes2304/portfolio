import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const AnimatorRender = (props) => {
    const anime = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: anime.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: props.animJson,
        });
        return () => lottie.stop();
    }, );
    return <div style={{height:props.height, width:props.width, visibility: props.vis}} ref={anime}/>;};

export default AnimatorRender;