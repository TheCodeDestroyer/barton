import { FC } from 'react';

interface ArrowRightProps {
  className?: string;
}

const ArrowRight: FC<ArrowRightProps> = ({ className }) => (
  <svg
    width="30"
    height="32"
    viewBox="0 0 30 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g filter="url(#filter0_d_17_9782)">
      <circle cx="15" cy="15.2002" r="15" fill="#F7F8FB" />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5703 19.591C13.0538 20.1117 13.0538 20.956 13.5703 21.4767C14.0869 21.9974 14.9243 21.9974 15.4409 21.4767L21.6667 15.2005L15.4409 8.92438C14.9243 8.40368 14.0869 8.40368 13.5704 8.92438C13.0538 9.44508 13.0538 10.2893 13.5704 10.81L16.4267 13.6895L9.65546 13.6895C8.92498 13.6895 8.3328 14.2864 8.3328 15.0228C8.3328 15.7592 8.92498 16.3561 9.65546 16.3561L16.7794 16.3561L13.5703 19.591Z"
      fill="#233869"
    />
    <defs>
      <filter
        id="filter0_d_17_9782"
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
          result="effect1_dropShadow_17_9782"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_17_9782"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default ArrowRight;
