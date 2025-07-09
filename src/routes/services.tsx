import { createFileRoute } from '@tanstack/react-router'
import Services from './homeComponent/services'

export const Route = createFileRoute('/services')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='container mx-auto px-4 md:px-6'>
      <Services />
    </div>
  )
}
