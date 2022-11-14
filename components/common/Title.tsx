import { FC } from 'react';

interface TitleProps {
  text: string;
}

const Title: FC<TitleProps> = ({ text }) => (
  <h1 className="text-4xl font-medium">{text}</h1>
);

export default Title;
