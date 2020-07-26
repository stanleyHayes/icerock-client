import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ScrollToTop from "./components/shared/ScrollToTop";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import HomePage from "./pages/home/HomePage";
import ProductsPage from "./pages/products/ProductsPage";
import ProductDetailPage from "./pages/products/ProductDetailPage";
import WhatsNewPage from "./pages/whatsnew/WhatsNewPage";
import OperationsPage from "./pages/operations/OperationsPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route path="/about" exact={true}>
            <AboutPage />
          </Route>

          <Route path="/contact" exact={true}>
            <ContactPage />
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

          <Route path="/whatsnew" exact={true}>
            <WhatsNewPage />
          </Route>

          <Route path="/operations" exact={true}>
            <OperationsPage />
          </Route>

        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
