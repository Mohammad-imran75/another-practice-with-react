import PropTypes from  'prop-types';
import { IoIosCheckmarkCircle } from "react-icons/io";

const Feature = ({feature}) => {
    return (
        <div className='flex flex-grow'>
            <p className='flex items-center gap-2'><IoIosCheckmarkCircle className='text-purple-500'></IoIosCheckmarkCircle>{feature}</p>
        </div>
    );
};
Feature.propTypes ={
    feature:PropTypes.string
}
export default Feature;