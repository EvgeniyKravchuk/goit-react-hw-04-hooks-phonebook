import PropTypes from "prop-types";
import { Input, Label } from "../contactForm/ContactForm.styled";

export default function Filter({ filter, onChange }) {
  return (
    <Label filter="true">
      Введите имя для поиска в списке контактов
      <Input name="filter" onChange={onChange} value={filter} />
    </Label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
