import PropTypes from "prop-types";
import { HeroWrap } from "./Hero.styled";

const Hero = ({ children }) => {
  return <HeroWrap>{children}</HeroWrap>;
};

export default Hero;

Hero.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
  ]),
};
