import { FC } from 'react';

interface ProfileCardWrapperProps {
  className?: string;
}

const ProfileCardWrapper: FC<ProfileCardWrapperProps> = ({ className }) => (
  <svg
    viewBox="0 0 325 111"
    fill="none"
    preserveAspectRatio="none"
    width="100%"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.71032 8.73659V18.2617V34.8271L2.0376 56.3221L3.71032 77.5877L2.0376 104.714L20.8814 110.2L41.2486 109.371H79.4089L108.847 110.2H147.229H200.762H241.165H293.688L319.95 103.574L325 89.6215V59.6752V26.016L319.95 1.69629H287.628H241.165H200.762L102.786 3.76696H36.1222H20.8814L3.71032 8.73659Z"
      fill="#D3D7E1"
    />
    <path
      d="M1.66256 7.07806V16.3834V32.5666L0 53.5657L1.66256 74.3406L0 100.841L18.7293 106.2L38.9728 105.391H76.9011L106.16 106.2H144.309H197.517H237.674H289.878L315.98 99.7269L321 86.0967V56.8414V23.9588L315.98 0.200195H283.855H237.674H197.517L100.137 2.2231H33.8775H18.7293L1.66256 7.07806Z"
      fill="white"
    />
  </svg>
);

export default ProfileCardWrapper;
