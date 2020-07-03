// @ts-nocheck
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { animated, useSpring, interpolate } from "react-spring";
import { transform } from "framer-motion";

interface IAnimatedCursorProvider {
  cursorStyle: any;
  children: any;
}

const positionTransform = (x, y) =>
  `translate3d(${x}px, ${y}px, 0) translate3d(-100%, -100%, 0)`;

const AnimatedCursorProvider = (props: IAnimatedCursorProvider) => {
  const { cursorStyle, children } = props;

  const [cursorPosition, setCursorPosition] = useSpring(() => ({
    xy: [0 - cursorStyle?.width / 2, 0 - cursorStyle?.height / 2],
    config: { mass: 2, tension: 300, friction: 50 },
  }));

  const positionObject = {
    transform: interpolate(
      [cursorPosition.xy.interpolate(positionTransform)],
      (position) => `${position}`
    ),
  };

  // const [animation, setAnimation] = useSpring(() => ({
  //   scale: 0.4,
  //   backgroundColor: "rgba(255, 255, 255, .0)",
  //   border: "0px solid red",
  //   config: {
  //     tension: 180,
  //     friction: 12,
  //   },
  // }));

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff",
      }}
      // onMouseDown={() => setAnimation({ scale: 0.3 })}
      // onMouseUp={() => setAnimation({ scale: 0.4 })}
      // onMouseLeave={() => setAnimation({ scale: 0 })}
      // onMouseEnter={(e) => setPosition({ xy: [e.clientX + 50, e.clientY + 50]
      //  }) }
      onMouseMove={(e) => {
        console.log(
          e.clientX,
          cursorStyle,
          e.clientX - cursorStyle?.width / 2
          // e.clientX + cursorStyle.width / 2,
          // e.clientY + cursorStyle / 2
        );
        setCursorPosition({
          xy: [
            e.clientX + cursorStyle?.width / 2,
            e.clientY + cursorStyle?.height / 2,
          ],
        });

        // if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
        //   setAnimation({
        //     backgroundColor: "rgba(255, 255, 255, 0)",
        //     border: "2px solid rgba(255, 255, 255, 1)",
        //   });
        //   if (e.buttons === 1) {
        //     setAnimation({ scale: 0.9 });
        //   } else {
        //     setAnimation({ scale: 0.99 });
        //   }
        // } else {
        //   setAnimation({
        //     backgroundColor: "rgba(255, 255, 255, 1)",
        //     border: "2px solid rgba(0, 0, 0, 0)",
        //   });
        //   if (e.buttons === 1) {
        //     setAnimation({ scale: 0.3 });
        //   } else {
        //     setAnimation({ scale: 0.4 });
        //   }
        // }
      }}
    >
      <animated.div
        // style={{
        //   position: "fixed",
        //   zIndex: 999999,
        //   width: 100,
        //   height: 100,
        //   borderRadius: 50,
        //   border: animation.border.interpolate((border) => `${border}`),
        //   backgroundColor: animation.backgroundColor.interpolate(
        //     (background) => `${background}`
        //   ),
        //   // backgroundColor: "red",
        //   // transform: cursor.xy.interpolate(trans),
        //   // transform: interpolate([position.xy, scale.scale], trans),
        //   transform: interpolate(
        //     [
        //       // @ts-ignore
        //       animation.scale.interpolate((v) => `scale(${v})`),
        //       // @ts-ignore
        //       position.xy.interpolate(trans),
        //     ],
        //     (scale, position) => `${position} ${scale}`
        //   ),
        //   willChange: "transform",
        //   pointerEvents: "none",
        //   mixBlendMode: "exclusion",
        // }}
        style={{ ...cursorStyle, ...positionObject, }}
      />
      {children}
    </div>
  );
};

export default AnimatedCursorProvider;
