
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="lg:w-2/12 mx-auto text-center my-4 ">
            <p className="text-yellow-500 mb-3">--- {subHeading} ---</p>
            <h3 className="text-3xl uppercase border-y-4 py-3">{heading}</h3>
        </div>
    );
};

export default SectionTitle;