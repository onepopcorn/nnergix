import style from './App.module.css'
import Header from './components/layout/Header.jsx'
import SideMenu from './components/layout/SideMenu.jsx'
import Dashboard from './components/Dashboard.jsx'

function App() {

    /**
     * In a large scale app that should be manage somewhere else
     * e.g. in a global state management system and most likely
     * as a response to some sort of login or user role/data, etc.
     * 
     * Also, some routing system should be used too (e.g. React Router)
     * but it's out of the scope of this test
     * 
     */

    const sidemenu = [
        {
            text: 'Dashboard',
            link: '#',
            icon: 'bar_chart',
            active: true,
        },
        {
            text: 'Analytics',
            link: '#',
            icon: 'show_chart',
            disabled: true,
        },
        {
            text: 'Settings',
            link: '#',
            icon: 'settings',
            disabled: true,
        },
    ]

    return (
        <div className={style.app}>
            <Header />
            <SideMenu items={sidemenu} />
            <Dashboard />
        </div >
    )
}

export default App