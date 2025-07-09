import { createFileRoute } from '@tanstack/react-router'
import Home from './homeComponent/home'

export const Route = createFileRoute('/useCases')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='container mx-auto px-4 md:px-6 mb-20'>
      <Home />
    </div>
  )
}
