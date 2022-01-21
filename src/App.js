import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";
import "./App.css";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import AboutUs from "./views/aboutUs";
import Services from "./views/services";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
    ReactGA.set({ page });
    ReactGA.pageview(page);
};

const App = () => {
    const childRef = useRef();
    let location = useLocation();

    useEffect(() => {
        const page = location.pathname;
        document.body.classList.add("is-loaded");
        childRef.current.init();
        trackPage(page);
    }, [location]);

    return (
        <ScrollReveal
            ref={childRef}
            children={() => (
                <Switch>
                    <AppRoute
                        exact
                        path="/"
                        component={Home}
                        layout={LayoutDefault}
                    />
                    <AppRoute
                        exact
                        path="/services"
                        component={Services}
                        layout={LayoutDefault}
                    />
                    <AppRoute
                        exact
                        path="/about-us"
                        component={AboutUs}
                        layout={LayoutDefault}
                    />
                </Switch>
            )}
        />
    );
};

export default App;
