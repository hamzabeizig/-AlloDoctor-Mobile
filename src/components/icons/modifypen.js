import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Modifypen = props => (
  <Svg  viewBox="0 0 512 512"{...props}>
    <Path
      d="M401.648 18.234c-24.394-24.351-63.898-24.351-88.293 0l-22.101 22.223-235.27 235.145-.5.503c-.12.122-.12.25-.25.25-.25.375-.625.747-.87 1.122 0 .125-.13.125-.13.25-.25.375-.37.625-.625 1-.12.125-.12.246-.246.375-.125.375-.25.625-.379 1 0 .12-.12.12-.12.25L.663 437.32a12.288 12.288 0 002.996 12.735 12.564 12.564 0 008.867 3.625c1.356-.024 2.7-.235 3.996-.625l156.848-52.325c.121 0 .121 0 .25-.12a4.523 4.523 0 001.121-.505.443.443 0 00.254-.12c.371-.25.871-.505 1.246-.755.371-.246.75-.62 1.125-.87.125-.13.246-.13.246-.25.13-.126.38-.247.504-.5l257.371-257.372c24.352-24.394 24.352-63.898 0-88.289zM169.375 371.383l-86.914-86.91L299.996 66.938l86.914 86.91zm-99.156-63.809l75.93 75.926-114.016 37.96zm347.664-184.82l-13.238 13.363L317.727 49.2l13.367-13.36c14.62-14.609 38.32-14.609 52.945 0l33.965 33.966c14.512 14.687 14.457 38.332-.121 52.949zm0 0"
      fill={'#4a4a4a'}
    />
  </Svg>
);

export default Modifypen;
