import propTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => (
  <section>
    <h2 className={css.header}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: propTypes.string,
};