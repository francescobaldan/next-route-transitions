// @ts-nocheck
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { animated, useSpring, interpolate } from "react-spring";

interface IAnimatedCursorProvider {
  children: any;
}

const trans = (x, y) =>
  `translate3d(${x}px, ${y}px, 0) translate3d(-100%, -100%, 0)`;
// const scale = (s) => `scale(${s})`;

const AnimatedCursorProvider = (props: IAnimatedCursorProvider) => {
  const { children } = props;

  const [position, setPosition] = useSpring(() => ({
    xy: [-50, -50],
    config: { mass: 2, tension: 300, friction: 50 },
  }));

  const [animation, setAnimation] = useSpring(() => ({
    scale: 0.4,
    backgroundColor: "rgba(255, 255, 255, .0)",
    border: "0px solid red",
    config: {
      tension: 180,
      friction: 12,
    },
  }));

  console.log(position.xy);

  return (
    <div
      css={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff",
      }}
      onMouseDown={() => setAnimation({ scale: 0.3 })}
      onMouseUp={() => setAnimation({ scale: 0.4 })}
      onMouseLeave={() => setAnimation({ scale: 0 })}
      onMouseMove={(e) => {
        console.log(e.buttons);
        setPosition({ xy: [e.clientX + 50, e.clientY + 50] });

        if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
          setAnimation({
            backgroundColor: "rgba(255, 255, 255, 0)",
            border: "2px solid rgba(255, 255, 255, 1)",
          });
          if (e.buttons === 1) {
            setAnimation({ scale: 0.9 });
          } else {
            setAnimation({ scale: 0.99 });
          }
        } else {
          setAnimation({
            backgroundColor: "rgba(255, 255, 255, 1)",
            border: "2px solid rgba(0, 0, 0, 0)",
          });
          if (e.buttons === 1) {
            setAnimation({ scale: 0.3 });
          } else {
            setAnimation({ scale: 0.4 });
          }
        }
      }}
    >
      <animated.div
        style={{
          position: "fixed",
          zIndex: 999999,
          width: 100,
          height: 100,
          borderRadius: 50,
          border: animation.border.interpolate((border) => `${border}`),
          backgroundColor: animation.backgroundColor.interpolate(
            (background) => `${background}`
          ),
          // backgroundColor: "red",
          // transform: cursor.xy.interpolate(trans),
          // transform: interpolate([position.xy, scale.scale], trans),
          transform: interpolate(
            [
              animation.scale.interpolate((v) => `scale(${v})`),
              position.xy.interpolate(trans),
            ],
            (scale, position) => `${position} ${scale}`
          ),
          willChange: "transform",
          pointerEvents: "none",
          mixBlendMode: "exclusion",
        }}
      />
      {children}
    </div>
  );
};

export default AnimatedCursorProvider;
