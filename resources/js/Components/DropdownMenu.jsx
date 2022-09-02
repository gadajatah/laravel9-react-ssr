import { Menu } from '@headlessui/react'
import { InertiaLink } from '@inertiajs/inertia-react'
import clsx from 'clsx'

function Link({href, children, ...props}) {
    return (
        <Menu.Item>
          {({ active }) => (
            <InertiaLink
              {...props}
              className={clsx(active && 'bg-gray-100 text-black', 'w-full block text-left text-gray-600 py-1.5 px-3 text-sm')}
              href={href}
            >
              {children}
            </InertiaLink>
          )}
        </Menu.Item>
    )
}

function DropdownMenu({label, children}) {
  return (
    <Menu className='relative' as='div'>
            <Menu.Button className='flex items-center gap-x-2'>{label}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-5 h-5'> 
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            </Menu.Button>
      <Menu.Items className='bg-white py-1 rounded border absolute w-64 top-full mt-2 right-0 overflow-hidden'>
        {children}
      </Menu.Items>
    </Menu>
  )
}

DropdownMenu.Link = Link
export default DropdownMenu; 