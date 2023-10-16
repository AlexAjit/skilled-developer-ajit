//next image 
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none px-20 xl:px-0 xl:h-[680px]'>
      <Image
      src={'/avatar6.png'}
      width={737}
      height={678}
      alt=''
      className='translate-z-0'
      />
    </div>
  );
};

export default Avatar;
