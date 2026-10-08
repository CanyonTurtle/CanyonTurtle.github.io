import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faFileCode, faGlasses } from '@fortawesome/free-solid-svg-icons';

export const icons = ['play', 'source', 'glasses'] as const;
export type IconType = (typeof icons)[number];

const iconToFa = {
  play: faPlay,
  source: faFileCode,
  glasses: faGlasses,
};

export function Icon({ type }: { type: IconType }) {
  return <FontAwesomeIcon className="w-3" icon={iconToFa[type]} />;
}
