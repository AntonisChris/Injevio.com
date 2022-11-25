import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Modal from '../components/Modal';
import FooterButton from '../components/FooterButton';
import logo from '../assets/logo.svg';
import android from '../assets/play-store-badge.svg';
import ios from '../assets/app-store-badge.svg';
import emailjs from '@emailjs/browser';

import { ppText } from '../assets/ConstVars';

const Home = () => {
  const [isPPModalOpen, setisPPModalOpen] = useState(false);
  const [isCUModalOpen, setisCUModalOpen] = useState(false);
  const [isTYModalOpen, setisTYModalOpen] = useState(false);

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail() {
    emailjs
      .send(
        'gmail',
        'ContactUs',
        { email, message, reply_to: email },
        'uxlRdXFNT50_2563v'
      )
      .then(
        (result) => {
          setisCUModalOpen(false);
          setisTYModalOpen(true);
          setTimeout(() => {
            setisTYModalOpen(false);
          }, 2000);
        },
        (error: any) => alert('Something went wrong :(. Pleaset try again.')
      );
  }

  return (
    <div className="flex flex-col relative items-center justify-between min-h-screen text-white bg-primary">
      {isPPModalOpen && (
        <Modal onClose={() => setisPPModalOpen(false)} title={'Privacy Policy'}>
          <div dangerouslySetInnerHTML={{ __html: ppText }} />
        </Modal>
      )}
      {isCUModalOpen && (
        <Modal onClose={() => setisCUModalOpen(false)} title={'Contact Us'}>
          <div className="flex flex-col h-full">
            <input
              className="rounded-lg border-[1px] px-2 my-3 w-full h-12"
              placeholder="Email"
              type="text"
              id="fname"
              name="fname"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="rounded-lg border-[1px] p-2 my-3 flex-1 w-full resize-none"
              placeholder="Message"
              id="fname"
              name="fname"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="self-end mt-3 bg-[#0099ff] hover:bg-[#0086E0] h-10 w-24 rounded-lg text-white font-semibold"
              onClick={sendEmail}
            >
              Submit
            </button>
          </div>
        </Modal>
      )}
      {isTYModalOpen && (
        <Modal onClose={() => setisTYModalOpen(false)} title={'Thank you'}>
          <div className="w-full h-full flex justify-center items-center">
            Your message was succesfully sent!
          </div>
        </Modal>
      )}
      <Head>
        <title>Injevio</title>
        <link rel="icon" href="/logo-fav.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,500;0,600;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="grid grid-cols-12 grid-rows-[128px_1fr] gap-4 items-center w-full flex-1 max-w-screen-lg px-6 ">
        <div className="col-start-1 col-span-12">
          <Image src={logo} height={32} width={114} />
        </div>
        <div className="col-span-12 md:col-span-6">
          <h2 className="text-6xl py-3">
            <b>
              Log your injections for{' '}
              <span className="text-[#0099FF]">free</span>
            </b>
          </h2>
          <h3 className="text-m py-3">
            Create an account and store all the injection information from your
            treatment. The history tab provides easy access to all of the
            previous injections for easy recycling of body points.
          </h3>
          <div className="pt-9 flex">
            <a
              href="https://apps.apple.com/gr/app/injevio/id1626890599?l=en"
              target={'_blank'}
              className="mr-4 "
            >
              <Image src={ios} />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=io.injev&hl=el&gl=US"
              target={'_blank'}
              className="mr-4 "
            >
              <Image src={android} />
            </a>
          </div>
        </div>
        <video
          src={'/video.mp4'}
          autoPlay
          muted
          loop
          className="col-span-12 md:col-span-6 "
          // style={{
          //     '-webkit-mask-image':
          //         'radial-gradient(circle, black 55%, transparent 100%);',
          // }}
        />
      </main>
      <footer className="bg-opacity-[0.12] bg-black w-screen h-12 mt-24 flex justify-center px-6">
        <div className="flex items-center justify-between max-w-screen-lg w-full">
          <div>
            <FooterButton onClick={() => setisPPModalOpen(true)}>
              Privacy Policy
            </FooterButton>
            <FooterButton onClick={() => setisCUModalOpen(true)}>
              Contact Us
            </FooterButton>
          </div>
          <div className="m-3 text-xs font-medium text-white opacity-50">
            <span>© injevio 2022</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
