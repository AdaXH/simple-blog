type Direction = 'pre' | 'next';

interface PreProps {
  bg?: string;
  borderColor?: string;
  iconColor?: string;
  onChange?: (arg: Direction) => void;
  preDisabled?: boolean;
  nextDisabled?: boolean;
}
