import React, { FC, useContext } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { UIContext } from "../context/ui-context";
import {
  Alignment,
  Button,
  Intent,
  Navbar,
  Colors,
  Text
} from "@blueprintjs/core";

type ActionbarProps = {
  nightmode: boolean;
  width: number;
  imageHeight: number;
  prev: any;
  next: any;
  imageIndex: number;
};

// ⚡️ ACTIONBAR ⚡️
const Actionbar: FC<ActionbarProps> = props => {
  const { nightmode, width, imageHeight, prev, next, imageIndex } = props;
  return (
    <motion.div
      animate={{
        backgroundColor: "rgba(0,0,0,0.1)",
        color: nightmode ? "#ccc" : "#555",
        width: width > 414 ? 500 : width,
        marginTop: imageHeight - 50,
        height: 50,
        zIndex: 1
      }}
    >
      <Navbar
        style={{ backgroundColor: "rgba(0,0,0,0)", boxShadow: "0px 0px" }}
      >
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "#3882AF",
              letterSpacing: 1
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: 20,
                  textAlign: "center"
                }}
              >
                {imageIndex + 1}
              </div>
              <div
                style={{ width: 20, textAlign: "center", fontSize: "0.70rem" }}
              >
                of
              </div>
              <div style={{ width: 20, textAlign: "center" }}>
                {images.length}
              </div>
            </div>
          </Navbar.Heading>
        </Navbar.Group>

        <Navbar.Group
          align={Alignment.LEFT}
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            width: width > 414 ? 240 : 180,
            paddingLeft: 10
          }}
        >
          <Navbar.Heading
            style={{
              color: "#3882AF",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: width > 414 ? "1.0rem" : "0.8rem"
            }}
          >
            {labels[imageIndex]}
          </Navbar.Heading>
        </Navbar.Group>

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
  "https://firebasestorage.googleapis.com/v0/b/keystone-media.appspot.com/o/images%2Fbig-berkey-pack.png?alt=media&token=709e6851-7b48-4e5a-a3a5-524a45290c5e",
  "https://firebasestorage.googleapis.com/v0/b/keystone-media.appspot.com/o/images%2Fblack-berkey.png?alt=media&token=6d3ba7df-c9aa-43a1-9e6a-0c163d2b6fb2"
];

const labels = ["Big Berkey Patriot Pack", "Berkey Carbon Filters"];

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

  function getImageWidth(e: any) {
    setState((state: {}) => ({ ...state, imageWidth: e.target.offsetWidth }));
  }

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          onLoad={getImageHeight}
          style={{
            position: "absolute",
            maxWidth: WIDTH > 400 ? 500 : WIDTH
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
        imageIndex={imageIndex}
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
