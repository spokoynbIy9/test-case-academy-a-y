import { GoodProvider } from '@/entities/good/model';
import { AppRouter } from './providers/Router';
import { CustomSuspense } from '@/shared/ui/Suspense/Suspense';

function App() {
  return (
    <CustomSuspense>
      <GoodProvider>
        <AppRouter />
      </GoodProvider>
    </CustomSuspense>
  );
}

export default App;
