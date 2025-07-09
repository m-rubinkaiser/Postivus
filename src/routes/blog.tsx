import { createFileRoute } from '@tanstack/react-router'
import Team from './homeComponent/team'

export const Route = createFileRoute('/blog')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='container mx-auto px-4 md:px-6'>
      <Team />
    </div>
  )
}
