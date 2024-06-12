import React,{useState} from 'react'
// browser console'da (F12) state değişince component tekrar render ediliyor.
// Tüm sayfa yerine sadece state'i değişen component render edilir.
export default function Userprops2(props) {
    const {name,age,job}=props;
    
    const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='col-md-8 mb-4'>
        <div className='card'>
          <div className='card-header d-flex justify-content-between'>
            <h4 className='d-inline'>{name}</h4>
            <i className='far fa-trash-alt fa-2x' style={{ cursor: 'pointer' }}></i>
          </div>
          {
            isVisible ? 
            <div className="card-body">
              <p className="card-text">{name}</p>
              <p className="card-text">{age}</p>
              <p className="card-text">{job}</p>
            </div> : 'null' 
            
          }
          
        </div>
      </div>
  )
}
