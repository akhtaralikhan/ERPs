import React from 'react';
import {Outlet} from 'react-router-dom';

function NonAuthLayouts() {
  return (
    <main className='auth-layout'>
      <Outlet/>
    </main>
  )
}

export default NonAuthLayouts
