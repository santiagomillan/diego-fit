export const Title = ({title, subtitle}) => {
    return (
    // <div className="text-center my-2">
    //   <h3 className="text-5xl font-bold  mb-4">{title}</h3>
    //   <p className="text-2xl ">{subtitle}</p>
    // </div>
    <div className="text-center my-4 md:my-8">
    <h3 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">{title}</h3>
    <p className="text-lg md:text-2xl">{subtitle}</p>
  </div>
    );
};