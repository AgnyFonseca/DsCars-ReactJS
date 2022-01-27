import Input from '../../components/Input/Input';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Catalog.css';

const Catalog = () => {
    return (
        <div className="catalog-container">
            <div className="search-container">
                <Input />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-4">
                        <ProductCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-4">
                        <ProductCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-4">
                        <ProductCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-4">
                        <ProductCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-4">
                        <ProductCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-4">
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;