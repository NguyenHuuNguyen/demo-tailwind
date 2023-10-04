import React from 'react';

interface ContentItem {
  id: number;
  title: string;
  body: string;
  image: string;
}

const Card: React.FC<{ item: ContentItem }> = ({ item }) => {
  return (
    <div className={`bg-white rounded-lg shadow-xl m-10 p-16 flex ${item.id % 2 === 0 ? 'md:flex-row-reverse' : ''} md:flex-row flex-col items-center max-w-[1000px]`}>
      <div>
        <h2 className='text-3xl font-semibold my-5'>{item.title}</h2>
        <p className='text-xl'>{item.body}</p>
      </div>
      <div>
        <img src={`./images/${item.image}`} alt="" className="w-4/5 mt-5" />
      </div>
    </div>
  );
};

export default Card;