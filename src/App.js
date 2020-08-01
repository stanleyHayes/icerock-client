import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ScrollToTop from "./components/shared/ScrollToTop";
import AboutPage from "./pages/about/AboutPage";
import HomePage from "./pages/home/HomePage";
import ProductsPage from "./pages/products/ProductsPage";
import ProductDetailPage from "./pages/products/ProductDetailPage";
import WhatsNewPage from "./pages/whatsnew/WhatsNewPage";
import ReviewsPage from "./pages/reviews/ReviewsPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route path="/about" exact={true}>
            <AboutPage />
          </Route>

          <Route path="/" exact={true}>
            <HomePage />
          </Route>

          <Route path="/products" exact={true}>
            <ProductsPage />
          </Route>

          <Route path="/products/:productId" exact={true}>
            <ProductDetailPage />
          </Route>

          <Route path="/whats-new" exact={true}>
            <WhatsNewPage />
          </Route>

          <Route path="/reviews" exact={true}>
            <ReviewsPage />
          </Route>

        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
