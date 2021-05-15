import React, { useState } from 'react';
import Styled from 'styled-components';

const CheckboxWrap = Styled.div`

`;

const BoxList = () => {
  const Boxes = [0, 1];
  const [checkedItems, setCheckedItems] = useState(new Set());

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.had(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
  };

  return (
    <>
      <Header>
        <input type="checkbox" />
      </Header>
      <List>
        {Boxes.map((Box, index) => (
          <Box key={index} />
        ))}
      </List>
    </>
  );
};

const Checkbox = () => {
  const [Checked, setChecked] = useState(false);

  const checkedHandler = ({ target }) => {
    setChecked(!Checked);
    checkedItemHandler(issue.id, target.checked);
  };

  return (
    <CheckboxWrap>
      <input type="checkbox" id="check"></input>
      <label id="check" htmlFor="check"></label>
    </CheckboxWrap>
  );
};

export default Checkbox;
