// // @ts-nocheck
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { animated, useSpring, interpolate } from "react-spring";
import { useEffect, useRef } from "react";

interface IAnimatedCursorProvider {
  cursorStyle: any;
  states?: any;
  movementConfig?: any;
  animationConfig?: any;
  hideOnLeave?: boolean;
  children: any;
}

const positionTransform: any = (x, y) =>
  `translate3d(${x}px, ${y}px, 0) translate3d(-100%, -100%, 0)`;

const AnimatedCursorProvider = (props: IAnimatedCursorProvider) => {
  const {
    cursorStyle,
    states,
    movementConfig,
    animationConfig,
    hideOnLeave = true,
    children,
  } = props;

  const defaultCursorStyle = {
    position: "fixed",
    zIndex: 999999,
    top: 0,
    left: 0,
    pointerEvents: "none",
  };

  // @ts-ignore
  const [cursorPosition, setCursorPosition] = useSpring(() => ({
    xy: [0 - cursorStyle?.width / 2, 0 - cursorStyle?.height / 2],
    config: movementConfig ?? { mass: 2, tension: 300, friction: 50 },
  }));

  // Create animation object for every custom property

  // @ts-ignore
  const [animation, setAnimation] = useSpring(() => ({
    ...states?.default,
    config: animationConfig ?? {
      tension: 180,
      friction: 12,
    },
  }));

  const keys = Object.keys(states?.default);

  const animationStyle = {};

  keys?.map((key) => {
    animationStyle[key] = animation[key]?.interpolate((prop) => `${prop}`);
  });

  const transitionStyle = {
    // transform: interpolate(
    //   [
    //     cursorPosition.xy.interpolate(positionTransform),
    //     // animation?.scale &&
    //       // animation.scale.interpolate((value) => `scale(${value})`),
    //     // animation?.rotate &&
    //     //   animation.rotate.interpolate((value) => `rotate(${value}deg)`),
    //   ],
    //   (position, scale) => `${position} ${scale}`
    // ),
    transform: cursorPosition.xy.interpolate(positionTransform),
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        // minHeight: "100vh",
        backgroundColor: "#fff",
      }}
      onMouseDown={(e) =>
        (e.nativeEvent.target as any).style.cursor === "pointer"
          ? setAnimation(states?.click)
          : setAnimation(states?.blankClick)
      }
      onMouseUp={(e) =>
        (e.nativeEvent.target as any).style.cursor === "pointer"
          ? setAnimation(states?.hover)
          : setAnimation(states?.default)
      }
      onMouseLeave={() => hideOnLeave && setAnimation({ scale: 0 })}
      onMouseMove={(e) => {
        const target: any = e.nativeEvent.target;

        setCursorPosition({
          xy: [
            e.clientX + cursorStyle?.width / 2,
            e.clientY + cursorStyle?.height / 2,
          ],
        });

        if (e.buttons === 1) {
          target.style.cursor === "pointer"
            ? setAnimation(states?.click)
            : setAnimation(states?.blankClick);
        } else {
          target.style.cursor === "pointer"
            ? setAnimation(states?.hover)
            : setAnimation(states?.default);
        }
      }}
    >
      <animated.div
        style={{
          ...defaultCursorStyle,
          ...cursorStyle,
          ...transitionStyle,
          ...animationStyle,
        }}
      />
      {children}
    </div>
  );
};

export const Pointer = (props) => {
  const ref = useRef(undefined);

  const addRecursivePointer = (current) => {
    if (current?.childNodes?.length) {
      current.childNodes.forEach((el) => {
        if (el.style) {
          el.style.cursor = "pointer";
          addRecursivePointer(el);
        }
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      addRecursivePointer(ref.current);
    }, 100);
  }, []);

  return (
    <div
      ref={(r) => (ref.current = r)}
      style={{
        ...props.style,
        width: "auto",
        cursor: "pointer",
      }}
    >
      {props.children}
    </div>
  );
};

export default AnimatedCursorProvider;
