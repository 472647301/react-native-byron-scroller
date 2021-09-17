/*
 *
 * Created by Stone
 * https://github.com/bolan9999
 * Email: shanshang130@gmail.com
 * Date: 2018/7/5
 *
 */
import { Platform } from "react-native";
import { ByronScroller } from "./src/ByronScroller";
import { SpringScrollView as BolanSpringScrollView } from "./src/SpringScrollView";

export const SpringScrollView =
  Platform.OS === "ios" ? BolanSpringScrollView : ByronScroller;
export * from "./src/SpringScrollView";
export * from "./src/RefreshHeader";
export * from "./src/LoadingFooter";
export * from "./src/NormalHeader";
export * from "./src/NormalFooter";
