import { RefObject } from "react";
import { useDomEvent, MotionValue } from "framer-motion";
import { spring } from "popmotion";
import { mix } from "@popmotion/popcorn";
import { debounce } from "lodash";

interface Constraints {
  top: number;
  bottom: number;
}

const deltaThreshold = 5;
const elasticFactor = 0.2;

function springTo(value: any, from: number, to: number) {
  if (value.isAnimating()) return;

  value.start((complete:any) => {
    const animation = spring({
      from,
      to,
      velocity: value.getVelocity(),
      stiffness: 400,
      damping: 40
    }).start({
      update: (v: number) => value.set(v),
      complete
    });

    return () => animation.stop();
  });
}

const debouncedSpringTo = debounce(springTo, 100);


export function useWheelScroll(
  ref: RefObject<Element>,
  y: MotionValue<number>,
  constraints: Constraints | null,
  onWheelCallback: (e: WheelEvent) => void
) {
  const onWheel = (event: WheelEvent) => {
    event.preventDefault();

    const currentY = y.get();
    let newY = currentY - event.deltaY;
    let startedAnimation = false;
    const isWithinBounds =
      constraints && newY >= constraints.top && newY <= constraints.bottom;

    if (constraints && !isWithinBounds) {
      newY = mix(currentY, newY, elasticFactor);

      if (newY < constraints.top) {
        if (event.deltaY <= deltaThreshold) {
          springTo(y, newY, constraints.top);
          startedAnimation = true;
        } else {
          debouncedSpringTo(y, newY, constraints.top);
        }
      }

      if (newY > constraints.bottom) {
        if (event.deltaY >= -deltaThreshold) {
          springTo(y, newY, constraints.bottom);
          startedAnimation = true;
        } else {
          debouncedSpringTo(y, newY, constraints.bottom);
        }
      }
    }

    if (!startedAnimation) {
      y.stop();
      y.set(newY);
    } else {
      debouncedSpringTo.cancel();
    }

    onWheelCallback(event);
  };

  useDomEvent(ref, "wheel",  onWheel, { passive: false });
}
