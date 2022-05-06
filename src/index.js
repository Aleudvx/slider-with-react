import React from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";

import Slider from "./Slider/Slider.js";

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<Slider/>)