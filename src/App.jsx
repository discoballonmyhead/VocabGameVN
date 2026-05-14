import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LangProvider } from './hooks/useLang';
import Nav from './components/Nav';
import DeconstructPage from './pages/DeconstructPage';
import StudyPage from './pages/StudyPage';
import QuizPage from './pages/QuizPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <BrowserRouter>
      <LangProvider>
        <Nav />
        <Routes>
          <Route path="/"      element={<DeconstructPage />} />
          <Route path="/study" element={<StudyPage />} />
          <Route path="/quiz"  element={<QuizPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </LangProvider>
    </BrowserRouter>
  );
}
