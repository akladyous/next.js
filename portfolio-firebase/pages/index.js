import NestedLayout from '@/components/NestedLayout.js';

import { db, storage } from '@/firebase/firebaseInit.js';
import { collection, getDocs, doc, addDoc, getDoc, setDoc } from 'firebase/firestore';
import { ref, getDownloadURL, getBytes } from 'firebase/storage';

import { useEffect, useState } from 'react';

export default function Home() {
  const [resumeUrl, setResumeUrl] = useState();
  const [blob, setBlob] = useState();

  useEffect(() => {
    const starsRef = ref(storage, 'resume_boula_akladyous.pdf');

    getDownloadURL(starsRef)
      .then((url) => {
        setResumeUrl(url);
        console.log('url : ', url.toString());
      })
      .catch((error) => {
        switch (error.code) {
          case 'storage/object-not-found':
            break;
          case 'storage/unauthorized':
            break;
          case 'storage/canceled':
            break;
          case 'storage/unknown':
            break;
        }
      });
    // if (resumeUrl) {
    //   fetch(resumeUrl).then((response) => {
    //     response.blob().then((blob) => {
    //       setBlob(blob);
    //     });
    //   });
    // }
  }, [resumeUrl]);
  return (
    <div>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ipsam, animi laudantium accusantium nam vero
          omnis tenetur iusto reiciendis consectetur eos, doloremque vel labore natus facilis, porro delectus sint!
          Repudiandae.
        </p>
      </div>
      <div>
        <p>download</p>
        <a
          className='button'
          // href="/assets/resume/resume_boula_akladyous.pdf"
          href='https://firebasestorage.googleapis.com/v0/b/portfolio-0223.appspot.com/o/resume_boula_akladyous.pdf?alt=media&token=f924bf4e-1c2c-4683-a8f7-944446cf68ac'
          download
          rel='noopener noreferrer'
          target='_blank'
        >
          <span className='button-text'>Download CV</span>
          <span className='button-icon fa fa-download'></span>
        </a>
      </div>
    </div>
  );
}

// Home.getLayout = function getLayout(page) {
//   return <NestedLayout>{page}</NestedLayout>;
// };

Home.PageLayout = NestedLayout;
