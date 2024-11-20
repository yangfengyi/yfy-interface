// components/CustomButton.tsx
import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(MuiButton)({
  padding: '12px 48px',
  backgroundColor: '#48e59b',
  borderRadius: '9999px',
  color: 'rgba(0, 0, 0, 0.8)',
  fontSize: '16px',
  fontWeight: 500,
  fontFamily: 'Roboto Mono',
  lineHeight: 1,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#48e59b',
  },
});

export interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

/**
 * TODO：组件库的封装需要跟设计协商
 */
export const Button: React.FC<CustomButtonProps> = ({ children, onClick }) => {
  return (
    <CustomButton disableElevation onClick={onClick}>
      {children}
    </CustomButton>
  );
};

export default Button;
