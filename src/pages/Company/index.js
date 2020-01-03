import React from 'react';

import Crud from '../../components/Crud';

const Company = () => {
  return (
    <>
      <div>
        <h2>Cadastro de empresa</h2>
      </div>
      <Crud
        url="/companies"
        data={{
          structure: [
            { column: 'title', alias: 'Título' },
            { column: 'cnpj', alias: 'CNPJ' },
          ],
        }}
      />
    </>
  );
};

export default Company;
