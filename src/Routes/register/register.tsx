import { useState } from 'react';
import React, { useEffect, } from 'react'
import { useNavigate } from 'react-router-dom';
import { CustomerModels } from '../../Models/registerCustomers'
import './register.css'


function CreateCustomer() {
    

    let CustDefault:CustomerModels = {
        username: '',
        firstname: '',
        lastname: '',
        password: '',
        email: 'default',
    };

    
    const [custOBJ, setcusOBJ] = useState(CustDefault);
    const [customer, setcustomer] = useState({} as CustomerModels);
    

    function insertUserName(e: any) {
        CustDefault.username = e.target.value;  
    }
    function insertFirstName(e: any) {
        CustDefault.firstname = e.target.value;
    }
    function insertLastName(e: any) {
        CustDefault.lastname = e.target.value;
    }
    function insertPassword(e: any) {
        CustDefault.password = e.target.value;
    }
    function insertEmail(e: any) {
        CustDefault.email = e.target.value;
    }
    
     function onSubmit(e: any) {
        e.preventDefault();
        
         fetch("http://guruguidebackend-env.eba-aq6pcaxp.us-east-1.elasticbeanstalk.com/api/Customers/AddCustomers", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    username: custOBJ.username,
                    firstname: custOBJ.firstname,
                    lastname: custOBJ.lastname,
                    password: custOBJ.password,
                    email: custOBJ.email,
                }
                )
            
            }).then(response => response.json())
                .then((customer:CustomerModels) => {
            
                console.log(customer);    
              
                setcusOBJ((prev) => customer);
                goToNewCustInfo();

        });
    };
            
        
        const navigate = useNavigate();
        const goToNewCustInfo = () => {
            navigate('/coachviewingpage');
        };
        

        
        return (
        <>
          <div>
          <h1>Registion for the Customer </h1>
          <h2>Please Enter The Infomation Below </h2>
          </div>
        
        <form className='createcustomer-container' onSubmit={onSubmit}>
            
            <div className="form-group col-md-4 ">
                <label htmlFor="inputUserName">UserName</label>
                <div>
                    <input type="text" className="form-control" id="inputName" placeholder="John Doe" onChange={insertUserName} />
                </div>
            </div>
            
            <div className="form-group col-md-4 ">
                <label htmlFor="inputFirstName">Firstname</label>
                <div>
                    <input type="text" className="form-control" id="inputPassword" placeholder="1234567890" onChange={insertFirstName} />
                </div>
            </div>
            
            <div className="form-group col-md-4">
                <label htmlFor="inputLastName">Last Name</label>
                <input type="text" className="form-control" id="inputFirstName" placeholder="1234 Main St" onChange={insertLastName} />
            </div>

                <label htmlFor="inputPassword">Password</label>
                <div>
                    <input type="password" className="form-control" id="inputPassword" placeholder="password" onChange={insertPassword} />
                </div>
                            
            <div className="form-group col-md-4">
                <label htmlFor="inputID">Email</label>
                <div>
                    <input type="text" className="form-control" id="inputLastName" placeholder="1" onChange={insertEmail} />
                </div>
                
                <div className="col-12 createcustomer-container">
                    <button type="submit" className="btn btn-primary"><div>Create Account</div></button>
                </div>
            </div>
        </form>
        </>
    )
}

export default CreateCustomer