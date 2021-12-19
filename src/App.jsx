import style from './App.module.css'
import Header from './components/layout/Header.jsx'
import SideMenu from './components/layout/SideMenu.jsx'
import WidgetArea from './components/layout/WidgetArea.jsx'
import Widget from './components/layout/Widget.jsx'

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
            <WidgetArea title='Dashboard' icon='bar_chart' >
                <Widget title="Statistics">
                    <p>This is a small text</p>
                    <p>this is a second text</p>
                </Widget>
                <Widget title="Other panels">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum ex ac nibh elementum dapibus. Nam ac eleifend metus. In hac habitasse platea dictumst. Suspendisse et fringilla orci. Vivamus non felis eu purus accumsan sollicitudin. Proin cursus, est ac hendrerit aliquam, diam nunc pulvinar magna, sagittis tincidunt ante felis sit amet odio. In dui justo, condimentum in rhoncus sed, suscipit non arcu. Donec vel finibus libero. Sed consectetur orci sed dolor gravida luctus. Vivamus ligula ipsum, tincidunt ac laoreet et, facilisis et purus. Fusce ultricies et felis imperdiet ultrices. Sed pretium odio eget dui auctor rutrum. Maecenas et urna vel purus auctor sollicitudin quis at mauris. Quisque tincidunt faucibus varius. Nullam eget varius justo, eu malesuada turpis.</p>
                </Widget>

            </WidgetArea>
        </div >
    )
}

export default App