import React from 'react';

const EditExpensePage = ({ match }) => {
  return (
    <div>
      <p>Edit id: {match.params.id}</p>
    </div>
  );
};

export default EditExpensePage;
