import React, { FC, useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { UIContext } from "../context/ui-context";

const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
];

const variants = {
  enter: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

export const Slider: FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [state, setState] = useContext(UIContext);
  const { imageHeight } = state;
  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  function getOffsets(e: any) {
    console.log(e.target.offsetHeight);
    setState((state: {}) => ({ ...state, imageHeight: e.target.offsetHeight }));
  }
  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          onLoad={getOffsets}
          style={{
            position: "absolute",
            maxWidth: "100vw",
            top: 50

            // height: "200px"
          }}
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 200 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div
        style={Object.assign({}, styles.prev, {
          marginTop: `${imageHeight * 0.9}px`
        })}
        onClick={() => paginate(-1)}
      >
        {"<"}
      </div>
      <div
        style={Object.assign({}, styles.next, {
          marginTop: `${imageHeight * 0.9}px`
        })}
        onClick={() => paginate(1)}
      >
        {">"}
      </div>
    </>
  );
};

const styles = {
  next: {
    marginLeft: 200,
    color: "rgba(204,204,204,0.7)",
    fontSize: 40,
    fontWeight: 100,
    zIndex: 1,
    height: "50px"
    // border: "1px solid red"
  },
  prev: {
    // marginTop: ``,
    color: "white",
    fontSize: 40,
    zIndex: 1,
    height: "50px",
    fontWeight: 100
  }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
