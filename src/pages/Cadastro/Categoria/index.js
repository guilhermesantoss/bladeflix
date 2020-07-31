import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };
  const [valores, setValores] = useState(valoresIniciais);

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, valores]);
    setValores(valoresIniciais);
  }

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor
    });
  }

  function handleChange(e) {
    // const { getAttribute, value } = e.target;
    setValor(
      e.target.getAttribute('name'), 
      e.target.value,
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria {valores.nome}</h1>

      <form onSubmit={handleSubmit}>
        
        <FormField 
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handleChange}
        />

        <FormField 
          label="Descrição"
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
        />

        <FormField 
          label="Cor"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
        />
        
        <button>Cadastrar</button>
      </form>

      <ul>
        {
          categorias.map((categoria, indice) => (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          ))
        }
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;