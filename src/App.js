import { FaTwitter, FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import FooterItem from './components/FooterItem';

const footerItems = [
  'About',
  'Help Center',
  'Terms of Service',
  'Privacy Policy',
  'Cookie Policy',
  'Accessilibity',
  'Ads info',
  'Blog',
  'Status',
  'Careers',
  'Brand Resources',
  'Advertising',
  'Marketing',
  'Twitter for Business',
  'Developers',
  'Directory',
  'Settings',
];

const height = 1023;

function App() {
  return (
    <div className="flex flex-col lg:h-[100vh] bg-black">
      <div className="lg:flex lg:flex-row-reverse lg:items-center flex flex-col grow bg-black">
        <section className="p-8 sm:pl-[20%] lg:pl-9 lg:w-[46%]">
          <div className="pb pb-14">
            <FaTwitter size={42} className="fill-[#d9d9d9]" />
          </div>

          <h1 className="stretch-y text-[#d9d9d9] text-5xl font-extrabold pb-10 sm:text-7xl sm:pb-14 sm:max-w-xs lg:min-w-fit">
            Happening now
          </h1>
          <p className="stretch-y text-[#d9d9d9] text-2xl font-bold pb-5 sm:text-4xl sm:pb-8">
            Join Twitter today.
          </p>

          <div className="max-w-[300px]">
            <div className="bg-white text-center rounded-full mb-2 flex justify-center items-center gap-x-1 min-w-[300px] cursor-pointer hover:bg-gray-200 transition-colors duration-200">
              <FcGoogle size={22} />
              <p className="py-2">Sign up with Google</p>
            </div>
            <div className="bg-white text-center rounded-full flex justify-center items-center gap-x-1 min-w-[300px] hover:bg-gray-200 cursor-pointer transition-colors duration-200">
              <FaApple size={22} />
              <p className="py-2">Sign up with Apple</p>
            </div>
            <p className="text-[#d9d9d9] text-center py-2 text-sm min-w-[300px]">
              or
            </p>
            <div className="bg-[#1d9bf0] text-center rounded-full mb-1 min-w-[300px] hover:bg-[#0088e2] cursor-pointer transition-colors duration-200">
              <p className="py-2 text-white font-bold">
                Sign up with phone or email
              </p>
            </div>
            <p className="text-[#6e676d] text-[10px] pb-12">
              By signing up, you agree to the{' '}
              <span className="text-[#1d9bf0] hover:underline cursor-pointer">
                Terms of Service
              </span>{' '}
              and{' '}
              <span className="text-[#1d9bf0] hover:underline cursor-pointer">
                Privacy Policy
              </span>
              , including{' '}
              <span className="text-[#1d9bf0] hover:underline cursor-pointer">
                Cookie Use
              </span>
              .
            </p>
            <p className="text-[#d9d9d9] font-medium pb-4">
              Already have an account?
            </p>
            <div className="bg-black text-center rounded-full mb-2 border min-w-[300px] hover:bg-[#010d14] cursor-pointer transition-colors duration-200">
              <p className="py-2 text-[#1d9bf0] font-medium">Sign in</p>
            </div>
          </div>
        </section>
        <section className="lg:w-[54%] flex w-full items-center h-[45vh] lg:h-full bg-[url('images/graffiti-bg.png')] bg-cover bg-center">
          <div className="flex grow justify-center">
            <FaTwitter className="fill-white" size="33vh" />
          </div>
        </section>
      </div>

      <footer className="bg-black text-[#6e676d] justify-center text-xs flex flex-wrap pb-2 pt-4 px-10">
        {footerItems.map((item) => (
          <FooterItem key={item} text={item} />
        ))}
        <span className="inline-block mr-4 mb-2">© 2022 Twitter, Inc.</span>
      </footer>
    </div>
  );
}

export default App;
