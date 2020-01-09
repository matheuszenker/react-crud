import React from 'react';

import Crud from '../../components/Crud';

const Company = () => {
  return (
    <>
      <div>
        <h2>Companies register</h2>
      </div>
      <Crud
        url="http://localhost:3001/companies"
        structure={[
          { column: 'title', alias: 'Title' },
          { column: 'cnpj', alias: 'CNPJ', type: 'number' },
          {
            column: 'entity_type',
            alias: 'Entity Type',
            type: 'select',
            select: {
              options: [
                { key: 0, value: 'Física' },
                { key: 1, value: 'Jurídica' },
              ],
              emptyOption: 'Selecione um valor',
            },
          },
        ]}
      />
    </>
  );
};

export default Company;
