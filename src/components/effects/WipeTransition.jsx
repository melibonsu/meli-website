export default function WipeTransition({ active }) {
  return <div className={`wipe ${active ? 'show' : ''}`} aria-hidden="true" />
}
