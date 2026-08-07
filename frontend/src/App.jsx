import { useAuth, } from '@clerk/react'
import { ThemeProvider } from './context/ThemeContext'
import { WallpaperProvider } from './context/WallpaperContext'
import { Routes, Route, Navigate } from "react-router";
import { Toaster } from "react-hot-toast";
import { useEffect } from 'react';
import ChatPage from './pages/ChatPage';
import AuthPage from './pages/AuthPage';

const App = () => {
  const { isSignedIn, isLoaded } = useAuth();


  // useEffect(() => {
  //   if (!isLoaded) return;

  //   if (!isSignedIn) checkAuth();
  //   else clearAuth();
  // }, [checkAuth, clearAuth, isLoaded, isSignedIn]);

  return (
    <ThemeProvider>
      <WallpaperProvider>
        <Routes>
          <Route path="/" element={isSignedIn ? <ChatPage /> : <Navigate to={"/auth"} replace />} />
          <Route
            path="/auth"
            element={!isSignedIn ? <AuthPage /> : <Navigate to={"/"} replace />}
          />
        </Routes>
        <Toaster />
      </WallpaperProvider>
    </ThemeProvider>
  )
}

export default App