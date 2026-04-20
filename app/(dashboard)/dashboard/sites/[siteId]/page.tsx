import AnalyticsChart from "@/components/anaalytics-chart"
import { getCurrentUser } from "@/lib/auth"
import { getAnalytics } from "@/services/analytics.service"
import { redirect } from "next/navigation"

interface Props {
    siteId: string
}
export default async function SiteAnalyticsPage({ params }: { params: Props }) {
    const user = await getCurrentUser()
    if (!user) return redirect('/login')

    const { siteId } = await params
    const data = await getAnalytics(siteId)

    const chartData = data.events.map(e => ({
        data: new Date(e.createdAt).toLocaleDateString(),
        count: 1
    }))
    return (
        <div>
            <h1>Analytics</h1>
            <div className="flex gap-4">
                <h2>Page Views</h2>
                <p>{data.pageviews}</p>
            </div>

            <div className="flex gap-4">
                <h2>Clicks</h2>
                <p>{data.clicks}</p>
            </div>

            <div>
                <AnalyticsChart data={chartData} />
            </div>

            <h2>Recent Events</h2>

            <ul>
                {
                    data.events.map(event => <li key={event.id}>
                        {event.type} - {event.path} - {" "}
                        {new Date(event.createdAt).toLocaleString()}
                    </li>)
                }
            </ul>
        </div>
    )
}