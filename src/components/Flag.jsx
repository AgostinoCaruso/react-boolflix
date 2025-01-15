
function Flag({ lang, size }) {

    return (

        <span className={`inline-block ${size}`}>
            <img
                src={`flags/${lang}.png`}
                alt={`${lang}`}
                className="h-full w-auto"
            />
        </span>
    );
}

export default Flag;