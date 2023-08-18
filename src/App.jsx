import styles from './App.module.css';
import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
export default class App extends Component {
  state = {
    search: '',
  };

  render() {
    return (
      <div className={styles.App}>
        <Searchbar />
      </div>
    );
  }
}
