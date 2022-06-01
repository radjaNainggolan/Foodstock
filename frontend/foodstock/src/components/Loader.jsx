import {Ripples} from '@uiball/loaders';
const Loader = ({loading}) => {
    return (
        <>
            {loading &&  
                <div className="loader">
                    <Ripples size={300} color="#FF6363"/>
                </div>
            }
        </>
    );
}
 
export default Loader;