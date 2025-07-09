export default function About() {
  return (
    <div className='overflow-visible w-auto md:w-[50vw] py-12 px-6 lg:px-10 flex flex-col'>
      <div className='max-w-4xl'>
        <h2
          className='text-4xl text-secondary text-center font-bold mb-12'
          // id='about'
        >
          About Us
        </h2>

        <p className='mx-auto text-xl text-secondary max-w-2xl text-center mb-12'>
          Campus chronicles is weekly newsletter for Paramount School and
          College. It brings information of previous, on-going, and upcoming
          events. New editions are published every sunday. As it is run by
          students, during examinations, the publishing is temporarily paused.
          Any important changes or updates are announced via notices. For any
          issues or reports, contact us at:{' '}
          <b>campuschroniclesnewsletter@gmail.com</b>
        </p>

        <div className='mb-16'>
          <h3 className='text-3xl text-secondary mb-8'>Founding Editors</h3>

          <div className='flex flex-wrap gap-4'>
            <div className='bg-transparent border-1 border-amber-950 p-4 rounded-lg shadow-md min-w-[320px]'>
              <h4 className='text-2xl text-primary mb-2'>Syed Anmole Seismi</h4>
              <p className='text-md text-gray-800'>A2 Level, Class of 2025</p>
            </div>

            <div className='bg-transparent border-1 border-amber-950 p-4 rounded-lg shadow-md min-w-[320px]'>
              <h4 className='text-2xl text-primary mb-2'>Nuha Nazia</h4>
              <p className='text-md text-gray-800'>A2 Level, Class of 2025</p>
            </div>
          </div>
        </div>

        <div className='mb-8'>
          <h3 className='text-xl text-secondary mb-4'>Web Developer</h3>

          <div className='flex flex-wrap gap-4'>
            <div className='bg-transparent border-1 border-amber-950 p-4 rounded-lg shadow-md min-w-[320px]'>
              <h4 className='text-xl text-primary mb-2'>
                Mashrur Sakif Souherdo
              </h4>
              <p className='text-md text-gray-800'>A2 Level, Class of 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Campus chronicles is a weekly newsletter,
// published every sunday. It brings information of previous,
// on-going, and upcoming events. The timeline is maintained as
// follows: 1. The week count is maintained according to the weeks
// the school remains open; the weeks during breaks are not
// counted. 2. As it is run by students, during examinations, the
// publishing is temporarily paused and this is informed through a
// notice. 3. The Edition number is maintained through the weeks
// that the newsletter is published. However, notices don't count
// as editions, although the week in which a notice is published is
// counted.
