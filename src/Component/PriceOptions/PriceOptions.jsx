import Priceoption from "../Priceoption/Priceoption";


const PriceOptions = () => {
   const priceOptions = [
        {
          "id": 1,
          "name": "Basic",
          "price": "$29.99/month",
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Locker room access"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": "$49.99/month",
          "features": [
            "All Basic features",
            "Access to group fitness classes",
            "Personal trainer consultation (1 session)"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": "$79.99/month",
          "features": [
            "All Standard features",
            "Unlimited access to group fitness classes",
            "Additional personal trainer sessions (2 sessions)"
          ]
        }
      ]
      
    return(
        <div>
            <h2 className="text-3xl font-bold text-center mt-10">Best price in the town</h2>
            <div className= "md:grid grid-cols-3 gap-6 mt-10 space-y-6">
            {
              priceOptions.map(option => <Priceoption key={option.id} option={option}></Priceoption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;