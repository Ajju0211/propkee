import Image from 'next/image';
import Button from '../ui/button';

function Footer() {
  const copyright = {
    text: '© 2025 Propkee Platform LLC FZ. All rights reserved | Building the future of Dubai real estate.',
    links: [
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Content Policy', href: '/content-policy' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  };

  const footerdata = [
    {
      title: 'UAE Office',
      address:
        'PROPKEE platform L.L.C-FZ, Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, United Arab Emirates, PO Box 10377 India Office',
    },
    {
      title: 'India Office',
      address:
        'Prosperty Infra And Realty Private Limited A418 floor 4th Floor, Plot CS - 286 Shivram Seth Amrutwar Road Worli, Delisle Road Mumbai 400013 Maharashtra India',
    },
  ];

  const socialMedia = [
    { icon: '/assets/social-media/twiter.svg', href: '/terms' },
    { icon: '/assets/social-media/youtube.svg', href: '/content-policy' },
    { icon: '/assets/social-media/instagram.svg', href: '/privacy-policy' },
    { icon: '/assets/social-media/linkedin.svg', href: '/privacy-policy' },
  ];

  return (
    <div className="flex w-full flex-col gap-[2.6rem] items-start justify-start py-[4rem] ">
      <div className="w-full flex flex-col items-start justify-start">
        {/* Logo */}
        <div className=" flex items-start justify-start lg:h-[2.9375rem] h-[32px] w-[131px]">
          <Image
            alt="logo"
            height={50}
            width={50}
            src={'/assets/logo.svg'}
            className="w-full h-full"
          />
        </div>
        {/* Footer Data  */}
        <div className="w-full mt-[3.5rem] mb-[4rem] flex flex-col sm:flex-row gap-[40px] items-center justify-between">
          {footerdata.map((item, idx) => (
            <div className="w-full max-w-[37.2813rem] flex flex-col gap-[0.75rem]">
              <span className="lg:blog-description blog-footertitle font-instrument-sans-600 tracking-[-0.0075rem] text-[#231E18] text-nowrap">
                {item?.title}
              </span>
              <p className="blog-peragraph text-[#515151]">{item?.address}</p>
            </div>
          ))}
        </div>

        {/* Social Media  */}
        <div className="w-full flex h-full gap-[1rem] flex-col">
          <span className="blog-heading text-[#231E18]">Questions?</span>
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full flex flex-col">
              <p>
                <span className="blog-description font-instrument-sans-600 text-[#515151]">
                  Reach out at 
                </span>
                <strong className="blog-description text-black font-instrument-sans-600">
                  talktous@propkee.com
                </strong>
              </p>
              <div className="flex gap-[1.25rem] mt-[1rem]">
                {socialMedia.map((item, idx) => (
                  <div className="w-[2rem] h-[2rem]">
                    <Image alt="logo" height={40} width={40} src={item.icon} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start justify-start gap-[1rem]">
              {' '}
              {/* <Button
                containerClass="max-w-[12.25rem] h-fit flex items-center justify-center py-[0.5rem] px-[1.8rem]"
                icon={
                  <div className="w-[1.5rem] h-[1.5rem]">
                    <Image
                      alt="logo"
                      height={40}
                      width={40}
                      src={'/assets/social-media/apple.svg'}
                    />
                  </div>
                }
                text="Propkee on the"
              >
                App Store
              </Button>
              <Button
                containerClass="max-w-[12.25rem] h-fit flex items-center justify-center py-[0.5rem] px-[1.8rem]"
                icon={
                  <div className="w-[1.5rem] h-[1.5rem]">
                    <Image
                      alt="logo"
                      height={40}
                      className="w-full h-full"
                      width={40}
                      src={'/assets/social-media/google-play.svg'}
                    />
                  </div>
                }
                text="Get it on"
              >
                Google Play
              </Button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Coppyright */}
      <div className=" relative py-[2.12rem] w-full flex flex-col xl:flex-row gap-[0.87rem] lg:items-center item-start  ">
        <div className="absolute h-px bg-[#929292] top-0 w-full"></div>
        <div className="absolute h-px bg-[#929292] bottom-0 w-full"></div>
        <p className="md:text-nowrap text-[#303030] blog-copyright">{copyright?.text}</p>
        <div className="flex md:flex-row flex-col item-start md:items-center gap-4">
          {copyright.links.map((item, index) => (
            <div key={item.label} className="flex items-center gap-4">
              {/* Render separator only between items */}
              {index != -1 && (
                <span className="hidden md:block h-[1.8125rem] w-px bg-gray-300" />
              )}
              <a
                href={item?.href}
                className="text-nowrap text-[#686868] sm:blog-smallHeading text-[0.75rem]"
              >
                {item?.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
