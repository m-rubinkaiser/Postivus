import { createFileRoute } from '@tanstack/react-router'
import Services from './homeComponent/services'
import Learn from './homeComponent/learn'
import Contactus from './homeComponent/contact'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <div className='mt-[50px] container mx-auto px-4 md:px-6'>
      <Learn />
      <Contactus />
      <Services />
    </div>
  )
}
