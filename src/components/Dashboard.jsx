import WidgetArea from './layout/WidgetArea.jsx'
import Widget from './layout/Widget.jsx'
import Table from './data/Table.jsx'
import Graph from './data/Graph.jsx'
import Series from './data/Series.jsx'
import { useState } from 'react'


const Dashboard = () => {
    /**
     * NOTE: In a real world app we would propbaly want to manage the state in globally
     * to have a single source of truth and mutate it through actions & reducers
     * with Redux or useContext but for this test this should be enough
     */
    const [selected, setSelected] = useState('TS1')

    return (
        <WidgetArea title='Dashboard' icon='bar_chart' >
            <Widget title='Data' icon='description'>
                <Series id={selected} onChange={setSelected} />
            </Widget>
            <Widget title='Table' icon='table_rows'>
                <Table id={selected} />
            </Widget>
            <Widget title='Graph' icon='show_chart'>
                <Graph id={selected} />
            </Widget>
        </WidgetArea>
    )
}

export default Dashboard