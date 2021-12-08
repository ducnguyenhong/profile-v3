import Starfish from 'component/starfish';
import DefaultLayout from 'layout/default-layout';
import Home from 'page/home';
import RotateScreen from 'page/rotate-screen';
import { useDimension } from 'util/useDimension';

function App() {
  const { width, height } = useDimension();

  if (width < height && width < 576) {
    return <RotateScreen />;
  }

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
