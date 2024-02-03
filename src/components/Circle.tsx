interface Props {
  scale: string;
  strokeDash: number;
  animationClass: string;
}

function Circle({ scale, strokeDash, animationClass }: Props) {
  const hoverFunction = () => {
    const overlayElement = document.querySelectorAll(".overlay-div").forEach((e) => e.classList.add("bigger"));
    const circleElement = document.querySelectorAll("#circle-id").forEach((e) => e.classList.add("circle-dash"));
  };
  const hoverFunctionLeave = () => {
    const overlayElement = document.querySelectorAll(".overlay-div").forEach((e) => e.classList.remove("bigger"));
    const circleElement = document.querySelectorAll("#circle-id").forEach((e) => e.classList.remove("circle-dash"));
  };

  return (
    <div style={{ transform: `scale(${scale})` }} className="overlay-div2">
      <div onMouseEnter={hoverFunction} onMouseLeave={hoverFunctionLeave} className="overlay-div">
        <svg width="18  vw" height="18vw" viewBox="0 0 60 60" className={animationClass}>
          <defs>
            <linearGradient id="myGradient">
              <stop offset="10%" stop-color="white" />
              <stop offset="95%" stop-color="white" />
            </linearGradient>
          </defs>
          <circle
            id="circle-id"
            className="circle-transition"
            style={{ filter: "drop-shadow( 0px 0px 0.3px rgba(255, 255, 255, 0.7))" }}
            stroke="url('#myGradient')"
            strokeWidth="0.5px"
            strokeDasharray={strokeDash}
            strokeLinecap="round"
            fill="transparent"
            r={"29"}
            cx={"30"}
            cy={"30"}
          ></circle>
        </svg>
      </div>
    </div>
  );
}

export default Circle;
