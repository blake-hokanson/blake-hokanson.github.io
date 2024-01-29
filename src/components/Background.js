import { useEffect } from "react";

const canvasStyle = {
    background: "black",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "-1",
}

const fontSize = 16;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums + nums

const rainDrops = [];

const draw = (canvas, context) => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    for(let i = 0; i < rainDrops.length; i++)
    {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i*fontSize, rainDrops[i]*fontSize);

        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

const backgroundInit = (canvas, context) => {
    
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;

    const columns = canvas.width/fontSize;

    for (let x = 0; x < columns; x++) {
        rainDrops[x] = Math.random() * canvas.height/fontSize;
    }

    for (let i = 0; i < canvas.height/fontSize; i++){
        draw(canvas, context);
    }
}

const test = () => {
    const canvas = document.getElementById("background");
    const context = canvas.getContext("2d");

    window.addEventListener("resize", () => backgroundInit(canvas, context));

    backgroundInit(canvas, context);
    const animate = setInterval(() => draw(canvas, context), 60);
    
    const cleanup = () => {
        window.removeEventListener("resize", () => backgroundInit(canvas, context));
        clearInterval(animate);
      };

    return cleanup
}

export default function Background({}) {
    useEffect(test, []);
    return (<>
      <canvas id="background" style={canvasStyle} ></canvas>
      <h1>TEST</h1>
      </>
    );
  }
  