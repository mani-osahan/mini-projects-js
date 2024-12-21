"use client";
import { useState } from "react";
import Styles from "./border-radius.module.css";
interface SliderObject {
  topLeft: number;
  topRight: number;
  bottomLeft: number;
  bottomRight: number;
}
export default function BorderRadius() {
  let [slider, setSlider]: any = useState<SliderObject>({
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  });

  let radiusValues = {
    topLeft: "border-top-left-radius",
    topRight: "border-top-right-radius",
    bottomLeft: "border-bottom-left-radius",
    bottomRight: "border-bottom-right-radius",
  };

  console.log("border-radius: " + slider);

  return (
    <div>
      <input
        type="range"
        min="1"
        max="25"
        onChange={(e) =>
          setSlider((prev: any) => ({
            ...prev,
            topLeft: Number(e.target.value),
          }))
        }
        value={slider.topLeft}
      />
      <input
        type="range"
        min="1"
        max="25"
        onChange={(e) =>
          setSlider((prev: any) => ({
            ...prev,
            topRight: Number(e.target.value),
          }))
        }
        value={slider.topRight}
      />
      <input
        type="range"
        min="1"
        max="25"
        onChange={(e) =>
          setSlider((prev: any) => ({
            ...prev,
            bottomRight: Number(e.target.value),
          }))
        }
        value={slider.bottomRight}
      />
      <input
        type="range"
        min="1"
        max="25"
        onChange={(e: any) =>
          setSlider((prev: any) => ({
            ...prev,
            bottomLeft: Number(e.target.value),
          }))
        }
        value={slider.bottomLeft}
      />

      <div
        className={Styles.border_container}
        style={{
          borderTopLeftRadius: `${slider.topLeft}px`,
          borderTopRightRadius: `${slider.topRight}px`,
          borderBottomLeftRadius: `${slider.bottomLeft}px`,
          borderBottomRightRadius: `${slider.bottomRight}px`,
        }}
      >
        {(Object.keys(radiusValues) as Array<keyof SliderObject>).map(
          (key: keyof SliderObject) => {
            return (
              <div key={key} className={Styles.radius_values}>
                <p>
                  {key}: {slider[key]}px
                </p>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
