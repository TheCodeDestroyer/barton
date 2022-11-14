import { FC, useMemo } from 'react';

import ProfileCardWrapper from './ProfileCardWrapper';
import SubTitle from './SubTitle';

interface ProfileCardProps {
  label: string;
  value: any;
  suffix?: string;
}

const ProfileCard: FC<ProfileCardProps> = ({ label, value, suffix }) => {
  const title = useMemo(() => {
    if (suffix) {
      return `${value} ${suffix}`;
    }

    return value;
  }, [suffix, value]);

  return (
    <div className="relative mt-[10px]">
      <ProfileCardWrapper />
      <div className="absolute z-10 text-[18px] flex flex-col items-center justify-center inset-0 m-auto">
        <label className="font-indie text-theme-blue-300/50 ">{label}</label>
        <SubTitle text={title} />
      </div>
    </div>
  );
};
export default ProfileCard;
