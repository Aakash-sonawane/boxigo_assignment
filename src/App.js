import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import MoveContext from './contextApi/moveContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ViewMove from './components/viewMove/ViewMove';
import Root from './components/root';

function App() {
  // const [view, setView] = useState('moves');
  const [moveData, setMoveData] = useState([]);

  useEffect(() => {
    fetchMoveData()
  }, [])

  const fetchMoveData = async () => {
    const response = await fetch("http://test.api.boxigo.in/sample-data/")
    const data = await response.json();

    setMoveData(data.Customer_Estimate_Flow)
  }
  // console.log('move data is',moveData)

  const router = createBrowserRouter([
    {
      path: "/",
      element: moveData && <Root />
    },
    {
      path: "/:id",
      element: <ViewMove />
    }
  ])
  return (
    <>

      <MoveContext.Provider value={[moveData, setMoveData]}>
        <RouterProvider router={router}>

        </RouterProvider>

      </MoveContext.Provider>
    </>
  );
}

export default App;
