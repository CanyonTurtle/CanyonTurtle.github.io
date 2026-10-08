import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faFileCode,
  faGlasses,
  faLink,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const iconToFa = {
  play: faPlay,
  source: faFileCode,
  glasses: faGlasses,
  link: faLink,
  linkedin: faLinkedin,
  email: faEnvelope,
};

export type IconType = keyof typeof iconToFa;

export function Icon({ icon }: { icon: IconType }) {
  return <FontAwesomeIcon className="w-3" icon={iconToFa[icon]} />;
}
