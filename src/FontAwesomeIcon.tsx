import { JSX } from "solid-js";
import { FontAwesomeIconProps } from "./lib/types";
import { parse, icon } from "@fortawesome/fontawesome-svg-core";

export function FontAwesomeIcon(props: FontAwesomeIconProps): JSX.Element {
  console.log(props.icon);
  // const [iconPrefix, iconName] = props.icon as IconProp[];
  const faicon = icon(parse.icon(props.icon), {
    // ...classes,
    // ...transform,
    // ...mask,
    // symbol,
    // title,
    // titleId,
    // maskId
  });

  console.log(faicon);
  // const mask = props. || ;
  // const maskId = props. || ;
  // const className = props. || ;
  // const color = props. || ;
  // const spin = props. || ;
  // const spinPulse = props. || ;
  // const spinReverse = props. || ;
  // const pulse = props. || ;
  // const beat = props. || ;
  // const fade = props. || ;
  // const beatFade = props. || ;
  // const bounce = props. || ;
  // const shake = props. || ;
  // const border = props. || ;
  // const fixedWidth = props. || ;
  // const inverse = props. || ;
  // const listItem = props. || ;
  // const flip = props. || ;
  // const size = props. || ;
  // const pull = props. || ;
  // const rotation = props. || ;
  // const transform = props. || ;
  // const symbol = props. || ;
  // const style = props. || ;
  // const tabIndex = props. || ;
  // const title = props. || ;
  // const titleId = props. || ;
  // const swapOpacity = props. || ;
  
  return (
    <svg></svg>
  )
}