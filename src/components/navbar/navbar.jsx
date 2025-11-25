import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../assets/images/logo.png'
import smallLogo from '../../assets/images/logo-small.png'
import whatsapp from '../../assets/svg/whatsapp.svg'
import arrowDown from '../../assets/arrow/arrow-down.svg'

const navigation = [
  { name: 'USD', href: '#', current: false, icon: arrowDown },
  { name: 'English', href: '#', current: false, icon: null },
  { name: 'تسجيل الدخول', href: '#', current: false, icon: null },
  { name: 'متابعه حجزي', href: '#', current: false, icon: null },
  { name: '01116010003+', href: '#', current: false, icon: whatsapp },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="relative bg-[#252c36] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="md:mx-6 md:px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center xs:justify-center md:justify-between sm:justify-start">
            <div className="flex shrink-0 justify-center h-full">
              <img
                alt="cairo nights"
                src={logo}
                className="h-10 md:h-15 w-auto max-w-6/8 md:max-w-7/8 md:pr-14 hidden xs:block"
              />
              <img
                alt="cairo nights"
                src={smallLogo}
                className="h-10 lg:h-15 w-auto max-w-7/8 md:pr-14 xs:hidden"
              />
            </div>
            <div className="hidden md:ml-6 md:block content-evenly">
              <div className="flex lg:space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-950/50 text-white' : 'text-white hover:text-gray-300',
                      'rounded-md px-3 py-2 text-sm font-medium gap-1 flex items-center',
                    )}
                  >
                    {item.icon && (<img src={item.icon} alt={item.name} className="inline h-4 w-4" />)}
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-950/50 text-white' : 'text-white hover:text-gray-300',
                'block rounded-md px-3 py-2 text-base font-medium gap-1 flex items-center',
              )}
            >
              {item.icon && (<img src={item.icon} alt={item.name} className="inline h-4 w-4" />)}
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
