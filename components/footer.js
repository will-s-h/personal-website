import Link from 'next/link'
import siteMetadata from './siteMetadata'
import GitHub from './icons/github.svg'
import Email from './icons/mail.svg'
import LinkedIn from './icons/linkedin.svg'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <Link href={"mailto:" + siteMetadata.email}>
            <Email className="w-8 dark:fill-white hover:fill-red/50"/>
          </Link>
          <Link href={siteMetadata.github}>
            <GitHub className="w-8 dark:fill-white hover:fill-red/50"/>
          </Link>
          <Link href={siteMetadata.linkedin}>
            <LinkedIn className="w-8 dark:fill-white hover:fill-red/50"/>
          </Link>
        </div>
        <div className="mb-2 flex space-x-2 text-sm font-sans text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  )
}