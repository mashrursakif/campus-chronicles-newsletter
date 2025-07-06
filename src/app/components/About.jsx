export default function About() {
  return (
    <div className='overflow-visible w-auto md:w-[50vw] py-12 px-6 lg:px-10 flex flex-col'>
      <div className='max-w-4xl'>
        <h2
          className='text-4xl text-secondary text-center font-bold mb-20'
          // id='about'
        >
          About Us
        </h2>

        <div className='mb-16'>
          <h3 className='text-3xl text-secondary mb-8'>Founding Editors</h3>

          <div className='flex flex-wrap gap-4'>
            <div className='bg-transparent p-4 rounded-lg shadow-md min-w-[320px]'>
              <h4 className='text-2xl text-primary mb-2'>Syed Anmole Seismi</h4>
              <p className='text-md text-gray-800'>A2 Level, Class of 2025</p>
            </div>

            <div className='bg-transparent p-4 rounded-lg shadow-md min-w-[320px]'>
              <h4 className='text-2xl text-primary mb-2'>Nuha Nazia</h4>
              <p className='text-md text-gray-800'>A2 Level, Class of 2025</p>
            </div>
          </div>
        </div>

        <div className='mb-8'>
          <h3 className='text-xl text-secondary mb-4'>Web Developer</h3>

          <div className='flex flex-wrap gap-4'>
            <div className='bg-transparent p-4 rounded-lg shadow-md min-w-[320px]'>
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
