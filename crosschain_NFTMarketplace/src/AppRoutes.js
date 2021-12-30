import React, { Component, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Spinner from './shared/Spinner';

const Home = lazy(() => import('./pages/home'));
const ItemDetails = lazy(() => import('./pages/item-details'));
const AuthorProfile = lazy(() => import('./pages/author-profile'));
const Auction = lazy(() => import('./pages/auction'));
const Create = lazy(() => import('./pages/create'));
const Discover = lazy(() => import('./pages/discover'));
const Activity = lazy(() => import('./pages/activity'));
const Authors = lazy(() => import('./pages/authors'));
const TermsCondition = lazy(() => import('./pages/terms-condition'));

class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/item-details" element={<ItemDetails />} />
          <Route path="/author-profile" element={<AuthorProfile />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/create" element={<Create />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/terms-condition" element={<TermsCondition />} />
        </Routes>
      </Suspense>
    );
  }
}

export default AppRoutes;