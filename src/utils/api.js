/**
 * Mocked endpoints/ids
 * 
 * In a real world app this most likley would come from a server with
 * a REST API or GraphQL, not json files.
 */
const endpoints = {
    'TS1': 1,
    'TS2': 2,
    'TS3': 3,
}

export async function getTableData(id, controller) {
    const url = `/data/monthly_table_${endpoints[id]}.json`
    const res = await fetch(url, { signal: controller.signal })
    return await res.json()
}

export async function getGraphData(id, controller) {
    const url = `/data/linechart_${endpoints[id]}.json`
    const res = await fetch(url, { signal: controller.signal })
    return await res.json()
}

export async function getSeriesData(controller) {
    const res = await fetch('data_frontend.json', controller.signal)
    return await res.json()
}