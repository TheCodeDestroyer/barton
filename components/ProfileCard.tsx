import { FC, useMemo } from 'react';

import ProfileCardWrapper from './ProfileCardWrapper';
import SubTitle from './SubTitle';

interface ProfileCardProps {
  label: string;
  value: any;
  suffix?: string;
  wrapperClassName?: string;
}

const ProfileCard: FC<ProfileCardProps> = ({
  label,
  value,
  suffix,
  wrapperClassName
}) => {
  const title = useMemo(() => {
    if (suffix) {
      return `${value} ${suffix}`;
    }

    return value;
  }, [suffix, value]);

  return (
    <div className="relative flex items-center mt-[10px]">
      <ProfileCardWrapper className="mx-auto" />
      <div className="absolute text-[18px] flex flex-col items-center left-1/3 ml-[28px]">
        <label className="font-indie text-theme-blue-300/50 ">{label}</label>
        <SubTitle text={title} />
      </div>
    </div>
  );
};
export default ProfileCard;
