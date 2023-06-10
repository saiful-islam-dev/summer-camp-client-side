
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-6/12 my-8">
            <h3 className="text-3xl font-bold uppercase underline underline-offset-8 py-4">{heading}</h3>
            <p className="mb-2 font-semibold">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;