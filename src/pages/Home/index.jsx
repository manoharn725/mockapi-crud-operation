import Students from '../../components/Students';
import './index.scss';

const Home = () => {
    return(
        <div className='home__container'>
            <h1>Students Data</h1>
            <Students />
        </div>
        
    )
}
export default Home;