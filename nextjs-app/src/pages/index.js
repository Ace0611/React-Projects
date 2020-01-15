import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

import Prices from '../components/Prices';

const Index = (props) => (
    <Layout>
        <div>
            <h1>Bitcoin</h1>
            <p>Check current Bitcoin rise</p>
            {/* {props.bpi.time.updated} */}
            <Prices bpi={props.bpi}/>
        </div>
    </Layout>
)

Index.getInitialProps = async function(){
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return {
        bpi: data.bpi
    }
}

export default Index;