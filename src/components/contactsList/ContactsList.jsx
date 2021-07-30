import PropTypes from "prop-types";
import { FaRegTrashAlt } from "react-icons/fa";
import { List, Item, Button } from "./ContaxList.styled";

export default function ContactsList({ contacts, deleteContact }) {
  return (
    <List>
      {contacts().map((contact) => {
        return (
          <Item key={contact.id}>
            {contact.name}: {contact.number}
            <Button id={contact.id} onClick={deleteContact}>
              <FaRegTrashAlt />
            </Button>
          </Item>
        );
      })}
    </List>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
