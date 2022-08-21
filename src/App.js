import './assets/commonStyles/common.scss';
import './assets/commonStyles/normalize.css';
import Footer from './assets/components/footer/Footer';

import Header from './assets/components/header/Header';
import Main from './assets/components/main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
