import {Ripples} from '@uiball/loaders';
const Loader = ({loading}) => {
    return (
        <>
            {loading &&  
                <div className="loader">
                    <Ripples size={1000} color="#FF6363"/>
                </div>
            }
        </>
    );
}
 
export default Loader;