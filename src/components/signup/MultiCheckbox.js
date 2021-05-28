import React, { useState } from 'react';

const labels = ['check 1', 'check 2'];

const MultiCheckbox = () => {
  const [checkList, setCheckList] = useState([false, false]);

  // index 번째 체크 상태를 반전시킨다
  const handleCheckClick = index => {
    setCheckList(checks => checks.map((c, i) => (i === index ? !c : c)));
  };

  const isAllChecked = checkList.every(x => x);

  return (
    <div>
      <ul>
        {labels.map((label, idx) => (
          <li key={idx}>
            <label>
              <input
                type="checkbox"
                checked={checkList[idx]}
                onClick={() => handleCheckClick(idx)}
              />
              {label}
            </label>
          </li>
        ))}
      </ul>
      <p>
        <button disabled={!isAllChecked}>다음</button>
      </p>
    </div>
  );
};
export default MultiCheckbox;
