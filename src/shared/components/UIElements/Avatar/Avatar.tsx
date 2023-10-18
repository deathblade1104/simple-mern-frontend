/* eslint-disable @typescript-eslint/no-explicit-any */

import './Avatar.css';
interface IAvatarProp {
  className?: string;
  style?: any;
  image: string;
  alt: string;
  width?: number | string;
}
const Avatar = (props: IAvatarProp) => {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
