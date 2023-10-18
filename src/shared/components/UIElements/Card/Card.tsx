/* eslint-disable @typescript-eslint/no-explicit-any */
import './Card.css';

interface ICardProps {
  className?: string;
  style?: any;
  children?: any;
}

const Card = (props: ICardProps) => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
