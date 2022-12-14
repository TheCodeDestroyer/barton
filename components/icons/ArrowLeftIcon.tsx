import { FC } from 'react';

import { classNames } from '../../util/jsx.util';

interface ArrowLeftProps {
  className?: string;
}

const ArrowLeftIcon: FC<ArrowLeftProps> = ({ className = '' }) => (
  <svg
    width="30"
    height="32"
    viewBox="0 0 30 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classNames(
      'hover:rounded-full hover:shadow hover:shadow-theme-blue-300',
      className
    )}
  >
    <g filter="url(#filter0_d_17_9790)">
      <circle cx="15" cy="15.2002" r="15" fill="#F7F8FB" />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.4297 10.8093C16.9462 10.2886 16.9462 9.44443 16.4297 8.92373C15.9131 8.40303 15.0757 8.40303 14.5591 8.92373L8.33325 15.1999L14.5591 21.476C15.0757 21.9967 15.9131 21.9967 16.4297 21.476C16.9462 20.9553 16.9462 20.1111 16.4297 19.5904L13.3887 16.5249H20.3445C21.075 16.5249 21.6672 15.9279 21.6672 15.1915C21.6672 14.4552 21.075 13.8582 20.3445 13.8582H13.4052L16.4297 10.8093Z"
      fill="#233869"
    />
    <defs>
      <filter
        id="filter0_d_17_9790"
        x="0"
        y="0.200195"
        width="30"
        height="31"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.827451 0 0 0 0 0.843137 0 0 0 0 0.882353 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_17_9790"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_17_9790"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default ArrowLeftIcon;
