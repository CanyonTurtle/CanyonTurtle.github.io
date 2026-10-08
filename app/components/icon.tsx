import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faFileCode } from '@fortawesome/free-solid-svg-icons';

export const icons = ["play", "source"];

const iconToFa = {
  "play": faPlay,
  "source": faFileCode
}

export function Icon({ type }: { children: React.ReactNode }) {
  return (
  <FontAwesomeIcon className="w-3" icon={iconToFa[type]}/>
  );
}
