import { createFileRoute } from '@tanstack/react-router'
import { YouTubeEmbed } from '../components/YouTubeEmbed'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="mx-auto">
        <YouTubeEmbed />
      </main>
    </div>
  )
}
