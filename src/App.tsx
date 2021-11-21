import Starfish from 'component/starfish';
import DefaultLayout from 'layout/default-layout';
import Home from 'page/home';

function App() {
  return (
    <div>
      <DefaultLayout>
        <Home />
        <Starfish />
      </DefaultLayout>
    </div>
  );
}

export default App;
