import React, { FC, useContext } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { UIContext } from "../context/ui-context";
import { Alignment, Button, Intent, Navbar, Colors } from "@blueprintjs/core";

type ActionbarProps = {
  nightmode: boolean;
  width: number;
  imageHeight: number;
  prev: any;
  next: any;
};
const Actionbar: FC<ActionbarProps> = props => {
  const { nightmode, width, imageHeight, prev, next } = props;
  return (
    <motion.div
      animate={{
        backgroundColor: "transparent",
        color: nightmode ? "#ccc" : "#555",
        width: width,
        marginTop: imageHeight - 50
      }}
    >
      <Navbar style={{ backgroundColor: "transparent", boxShadow: "0px 0px" }}>
        <Navbar.Group align={Alignment.RIGHT}>
          <Button
            intent={nightmode ? Intent.NONE : Intent.PRIMARY}
            onClick={prev}
            className="bp3-minimal"
            icon="chevron-left"
            text=""
          />

          <Navbar.Divider color={Colors.GRAY2} />
          <Button
            intent={nightmode ? Intent.NONE : Intent.PRIMARY}
            onClick={next}
            className="bp3-minimal"
            icon="chevron-right"
            text=""
          />
        </Navbar.Group>
      </Navbar>
    </motion.div>
  );
};

const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
];

const variants = {
  enter: (direction: number) => ({
    x: direction < 0 ? 500 : -500,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 500 : -500,
    opacity: 0
  })
};

const Slider: FC = () => {
  const [state, setState] = useContext(UIContext);
  const { imageHeight, nightmode, WIDTH } = state;
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  function getImageHeight(e: any) {
    setState((state: {}) => ({ ...state, imageHeight: e.target.offsetHeight }));
  }

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          onLoad={getImageHeight}
          style={{
            position: "absolute",
            maxWidth: WIDTH
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

      <Actionbar
        nightmode={nightmode}
        width={WIDTH}
        imageHeight={imageHeight}
        prev={() => paginate(-1)}
        next={() => paginate(1)}
      />
    </>
  );
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 1000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default Slider;
