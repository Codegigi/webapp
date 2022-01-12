//import Card from 'react-bootstrap/Card'
    // const Card2 = () => {
   
//     return(

    
//     )
// }

import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Card2 = () => {

    const header = (
        <img alt="Card" src="images/usercard.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );
    const footer = (
        <span  >
           New member?  <Button label='Sign Up' icon=""  />
           <p>
           Already a member? <Button label="Log In" icon="" className="p-button-secondary p-ml-2" />
           </p>
        </span>
    );

    return (
        <div>
            {/* <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}>
                <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            </Card> */}

            <Card title="Sign Up" subTitle="" style={{ width: '35em' }} footer={footer} header={header}>
                <p className="p-m-0" style={{lineHeight: '1.5'}}> Become a member to enjoy unlimited benefits </p>
            </Card>
        </div>
    )
}

export default Card2