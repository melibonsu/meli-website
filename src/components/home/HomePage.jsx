import HeroSection from './HeroSection'

export default function HomePage({ className, onNavigate }) {
  return (
    <section className={className} id="page-home">
      <HeroSection onNavigate={onNavigate} />
    </section>
  )
}
