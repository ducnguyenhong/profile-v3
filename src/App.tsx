import LoadableUI from 'layout/loadable-ui';
import Loadable from 'react-loadable';
import { useDimension } from 'util/useDimension';

const RotateScreen = Loadable({
  loader: () => import('page/rotate-screen'),
  loading: LoadableUI,
});

const DefaultLayout = Loadable({
  loader: () => import('layout/default-layout'),
  loading: LoadableUI,
});

const Starfish = Loadable({
  loader: () => import('component/starfish'),
  loading: LoadableUI,
});

const MainRouter = Loadable({
  loader: () => import('route/router'),
  loading: LoadableUI,
});

const Music = Loadable({
  loader: () => import('component/music'),
  loading: LoadableUI,
});

const TetHoliday = Loadable({
  loader: () => import('component/tet-holiday'),
  loading: LoadableUI,
});

function App() {
  const { width, height } = useDimension();

  if (width < height) {
    return <RotateScreen />;
  }

  return (
    <div>
      <DefaultLayout>
        <MainRouter />
        <Starfish />
        <Music />
        <TetHoliday />
      </DefaultLayout>
    </div>
  );
}

export default App;
