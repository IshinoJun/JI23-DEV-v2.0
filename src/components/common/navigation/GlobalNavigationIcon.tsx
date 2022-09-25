import { GlobalNavigationType } from '@/enumObjects/GlobalNavigationType';
import { unreachable } from '@/utils/ErrorHandlingUtils';
import { useCallback } from 'react';
import { FaFileAlt, FaUserCircle } from 'react-icons/fa';
import tw from 'twin.macro';

type Props = {
  type: GlobalNavigationType;
  size?: string;
  color?: 'white';
};

const styles = { white: tw`text-white` };

export const GlobalNavigationIcon = ({
  type,
  size = '18px',
  color,
}: Props): JSX.Element => {
  const GlobalNavigationToIcon = useCallback(() => {
    switch (type) {
      case GlobalNavigationType.PROFILE:
        return (
          <FaUserCircle
            size={size}
            css={color ? styles[color] : tw`text-blue-gray-600`}
          />
        );
      case GlobalNavigationType.BLOGS:
        return (
          <FaFileAlt
            size={size}
            css={color ? styles[color] : tw`text-blue-gray-600`}
          />
        );
      default:
        unreachable();
    }
  }, [color, size, type]);

  return GlobalNavigationToIcon();
};
