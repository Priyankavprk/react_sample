import React from 'react'
import CardItem from '../Card'

function Home() {
  return (
    <div style={{margin: '5%', display: 'flex', flex: '1', flexDirection: 'row', justifyContent: 'space-around'}}>
          <CardItem title={'Add employee'} link={'Add'} linkValue={'addemployee'}/>
          <CardItem title={'Add branch'} link={'Add'} linkValue={'addbranch'}/>
          <CardItem title={'Add user'} link={'Add'} linkValue={'adduser'}/>
    </div>
  );
}

export default Home;
