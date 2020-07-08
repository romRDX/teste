import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';

import orderBy from '../../utils/orderBy';
import filterBy from '../../utils/filterBy';

import { Container, Content } from './styles';

import { IBook } from '../../store/ducks/books/types';
import { Props, State} from './types';

console.log('SheetGo - Bookshelf / REDUX');

const Dashboard: React.FC<Props> = ({books, dispatch}) => {
  const [availableBooks, setAvailableBooks] = useState<IBook[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [orderType, setOrderType] = useState('A-Z');
  const [orderDirection, setOrderDirection] = useState('ASC');
  const [nameFilter, setNameFilter] = useState('');

  useEffect(()=> {
      setAvailableBooks(books);
  }, [books]);

  const toggleModal = useCallback( (): void => {
    setModalOpen(!modalOpen);
  },[setModalOpen, modalOpen]);

  const readBooks = useMemo(() => {
    const filteredBooks = filterBy(availableBooks, 'read', nameFilter);
    return orderBy(filteredBooks, orderType, orderDirection);
  }, [availableBooks, orderType, orderDirection, nameFilter]);

  return (
    <Container>

      <Content>
        <h1>Hello World</h1>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state: State) => ({
  books: state.books.data,
});

export default connect(mapStateToProps)(Dashboard);
