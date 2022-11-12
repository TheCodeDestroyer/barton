import { FC, ReactElement } from 'react';

interface SubTitleProps {
  text: string;
}

const SubTitle: FC<SubTitleProps> = ({ text }) => (
  <span className="font-bold text-[18px]">{text}</span>
);

export default SubTitle;
