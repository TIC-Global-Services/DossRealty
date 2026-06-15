import KnowMore from '@/components/projects/KnowMore'
import About from '@/components/projects/promise-park/About'
import DossEdge from '@/components/projects/promise-park/DossEdge'
import Gallery from '@/components/projects/promise-park/Gallery'
import Hero from '@/components/projects/promise-park/Hero'
import Highlights from '@/components/projects/promise-park/Highlights'
import LocationHighlights from '@/components/projects/promise-park/LocationHighlights'
import EnquiryBtn from '@/components/reusable/EnquiryBtn'
import ConnectedToChennai from '@/components/reusable/ConnectedToChennai'
import ConnectedToChennaiTitle from '@/components/projects/metropettai/ConnectedToChennaiTitle'

const page = () => {
  return (
    <>
    <EnquiryBtn />
    <Hero />
    <About />
    <DossEdge />
    <Highlights />
    <ConnectedToChennaiTitle />
    <ConnectedToChennai />
    <Gallery />
    <LocationHighlights />
    <KnowMore />
    </>
  )
}

export default page
