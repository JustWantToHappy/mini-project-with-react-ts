import React from "react";
import Home from "./Home";
import MyContext from "./context/index";
import PageNotFound from "./PageNotFound";
import styled from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
const pages = import.meta.glob("./pages/*/index.tsx");

const Loading = () => {
  return <div>loading ...</div>
}

const AppBox = styled('div')`
    
`;

function App() {
  const location = useLocation();
  const FC = React.useRef<React.FC>(Loading);
  const [currentURL, setCurrentURL] = React.useState("/");
  const [routes, setRoutes] = React.useState<string[]>([]);

  React.useEffect(() => {
    const url = decodeURIComponent(location.pathname);
    const wholeURL = "./pages" + url + "/index.tsx";
    if (pages[wholeURL]) {
      import(wholeURL).then(module => {
        FC.current = module.default;
        setCurrentURL(url);
      }).catch(err => console.info(err));
    }
  }, [location]);

  React.useEffect(() => {
    const reg = /\.\/pages\/(.+)\/index\.tsx/;
    const routes: string[] = [];
    for (const url in pages) {
      const address = url.match(reg);
      if (address) {
        routes.push(address[1]);
      }
    }
    setRoutes(routes);
  }, []);
  return (
    <AppBox>
      <MyContext.Provider value={routes}>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path={currentURL} Component={FC.current} exact />
          <Route path="*" Component={PageNotFound} />
        </Routes>
      </MyContext.Provider>
    </AppBox>
  )
}

export default App
