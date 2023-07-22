import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link';

type ColumnProps= {
  title: string;
  links: Array<string>;
} 

const Footer = () => {
  const FooterColumn = ({title,links}: ColumnProps) => (
    <div className="footer_column">
      <h4 className="font-semibold">{title}</h4>
      <ul className="flex flex-col gap-2 font-normal">
        {links.map((link) => <Link href="/" key={link}>{link}</Link>)}
      </ul>
    </div>
  )

  return (
    <footer className="flexStart footer">
      <div className="flex flex-col w-full gap-12">
        <div className="flex flex-col items-start">
          <Image 
            src="/logo-purple.svg"
            width={115}
            height={38}
            alt="Flexibble"
          />
          <p className="mt-5 text-sm font-normal text-start max-w-5">
            Flexibble is the world's leading community for creators to lead, share and grow.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />

          <div className="flex flex-col flex-1 gap-4 ">
            <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
            <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
          </div>
          <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />
          <div className="flex flex-col flex-1 gap-4 ">
            <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links} />
            <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links} />
          </div>
          <FooterColumn title={footerLinks[6].title} links={footerLinks[6].links} />
        </div>
      </div>
      <div className=" flex-Between footer-copyright">
        <p>@2023 Flexibble All Rights Reserved.</p>
        <p className='mt-2 ml-8 text-gray'>
          <span className="text-black"> 10,654</span> projects submitted
        </p>
      </div>
    </footer>
  )
}

export default Footer