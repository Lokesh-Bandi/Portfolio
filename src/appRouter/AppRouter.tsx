import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AppGrid from '../AppGrid/AppGrid';
import { NAV_ITEMS, NAV_ITEMS_ARRAY } from '../components/Navbar/config';
import ExperiencePage from '../components/Pages/ExperiencePage/ExperiencePage';
import HomePage from '../components/Pages/HomePage/HomePage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppGrid />}>
          <Route index element={<ExperiencePage />} />
          {NAV_ITEMS_ARRAY.map((navItem) => {
            const navItemInfo = NAV_ITEMS[navItem as keyof typeof NAV_ITEMS];
            return (
              <Route
                key={navItemInfo.name}
                path={navItemInfo.path}
                element={navItemInfo.component}
              >
                <Route path="*" element={<Navigate to={`/`} />} />
              </Route>
            );
          })}
          {/* Catch-all route to redirect to the root page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
