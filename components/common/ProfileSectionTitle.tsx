import { FC } from 'react';

import ArrowDownIcon from '../icons/ArrowDownIcon';

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
    <ArrowDownIcon className="mt-3" />
  </div>
);

export default ProfileSectionTitle;
