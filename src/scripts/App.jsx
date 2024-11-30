import '../styles/App.css';
import React, { lazy, Suspense } from 'react';
const About = lazy(() => import('./About'));
const Links = lazy(() => import('./Links'));
const Frontend = lazy(() => import('./Frontend'));
const Backend = lazy(() => import('./Backend'));
const Technologies = lazy(() => import('./Technologies'));
const GitHubProjects = lazy(() => import('./GitHubProjects'));
const Experience = lazy(() => import('./Experience'));

export default function App() {
    return (
        <div className="App">
            <div className='profile-wrapper'>
                <img id="profpic" src="assets/carlos.jpg" alt="Profile Picture" loading='lazy'/>
            </div>
            <h1>Carlos Arroyo</h1>
            <h2>Software & AI Engineer</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <About />
                <Experience />
                <Frontend />
                <Backend />
                <Technologies />
                <GitHubProjects />
                <Links />
            </Suspense>
        </div>
    )
};