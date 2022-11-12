import { FC } from 'react';

import { classNames } from '../util/jsx.util';
import ArrowDown from './icons/ArrowDown';

interface ProfileSectionTitleProps {
  title: string;
  className?: string;
}

const ProfileSectionTitle: FC<ProfileSectionTitleProps> = ({
  title,
  className
}) => (
  <div className={className}>
    <h3 className="font-indie text-[18px] text-theme-blue-300 pb-4 float-left mr-2">
      {title}
    </h3>
    <ArrowDown className="mt-3" />
  </div>
);

export default ProfileSectionTitle;
