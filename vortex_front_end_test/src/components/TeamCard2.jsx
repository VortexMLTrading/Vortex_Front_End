
const TeamCard = ({ name, title, img }) => (

    <div className="flex flex-col items-center pb-10">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full   w-24 h-24 mb-3 rounded-full shadow-lg" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-gray-900 text-[20px] leading-[32px]">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-gray-400">
          {title}
        </p>
        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
      </div>
    </div>
  )
  
  export default TeamCard;