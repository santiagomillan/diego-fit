export const Title = ({title, subtitle}) => {
    return (
    // <div className="text-center my-2">
    //   <h3 className="text-5xl font-bold  mb-4">{title}</h3>
    //   <p className="text-2xl ">{subtitle}</p>
    // </div>
    <div className="text-center my-4 md:my-8 mx-20 lg:mx-0">
    <p className="text-4xl md:text-5xl font-bold mb-2 md:mb-4 text-sky-500">{title}</p>
    <p className="text-xl md:text-2xl">{subtitle}</p>
  </div>
    );
};