import PropTypes from  'prop-types';
import Feature from '../Feature/Feature';

const Priceoption = ({option}) => {
    const {name,price,features} = option;
    return (
        <div className="bg-blue-500   text-white p-6 rounded-xl space-y-3">
            <h2>
                <span className='text-5xl font-bold'>{price}</span>
            </h2>
            <h1 className='text-4xl font-semibold'>Name : {name}</h1>
            {
                features.map((feature,idx) =><Feature feature={feature} key={idx}></Feature>)
            }
            <button className='bg-green-600 p-4 w-full font-extrabold rounded-lg hover:bg-green-900'>Buy Now</button>
        </div>
    );
};
Priceoption.propTypes ={
    option:PropTypes.object
}
export default Priceoption;