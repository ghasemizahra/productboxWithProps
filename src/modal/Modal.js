import React from 'react'

import './modal.css'
export default function Modal({children}) {
  return (

<div>
<div id="id01" class="modal">

<form class="modal-content" action="/action_page.php">

<div class="containerr">
      {children}
      </div>
      </form>
      </div>
</div>




  )
}


//....
/* <div>
    <div className='cd-popup is-visible 'role='alert'>
        <div className='cd-popup-container'>
        <p>are You surre you want to delete this element?</p>
        

            <ul className='cd-button'>
                <li><a href="#0">Yes</a></li>
                <li><a href="#0">No</a></li>
            </ul>
            <a className='cd-popup-close img-replace' href="#0">Close</a>
            </div>
    </div>
</div> */