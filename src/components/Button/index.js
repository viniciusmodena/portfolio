import { ThemeButton } from "./style";

const Button = ({ handleClick, mobile, children }) => {
  return (
    <ThemeButton mobile={mobile} onClick={handleClick}>
      {children}
    </ThemeButton>
  );
};

export default Button;
