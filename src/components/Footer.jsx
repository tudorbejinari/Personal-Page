export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8">
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center text-sm text-gray-600">
        <span>Tudor Bejinari — Senior Software Tester</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
