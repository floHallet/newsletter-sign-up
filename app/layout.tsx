import './globals.css'

export const metadata = {
  title: 'Frontend Mentor | Newsletter sign-up form with success message',
  description: 'A frontend Mentor junior challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
