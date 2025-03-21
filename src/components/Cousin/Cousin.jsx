import Special from '../Special/Special';
import { AssetContext } from '../Grandpa/Grandpa';
import Friend from '../Friends/Friends';

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                {asset && <Special asset={asset}></Special>}
                {
                    name == 'Fatima' && <Friend></Friend>
                }
            </section>
        </div>
    );
};

export default Cousin;