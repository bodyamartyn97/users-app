import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from './Pages/Form/Form';
import Users from './Pages/Users/Users';
import User from './Pages/User/User';
import store from './store/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const Root = () => {
  return (
    <div className='container'>
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Form />} />
      <Route path='/users' element={<ProtectedRoute><Users /></ProtectedRoute>} />
      <Route path='/users/:userId' errorElement={<ErrorPage />} element={<ProtectedRoute><User /></ProtectedRoute>} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>
);



