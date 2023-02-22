export interface iCardProps {
  name: string;
  age: number;
  hobby: string;
}

function Card({ name, age, hobby }: iCardProps) {
  return (
    <>
      <div>
        <h3>{name}</h3>
        <p>{age}</p>
        <span>{hobby}</span>
      </div>
    </>
  );
}

export default Card;
