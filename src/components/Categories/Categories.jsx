import { useSearchParams } from "react-router-dom";
import Container from "../../Shared/Navbar/Container";
import Box from "./Box";
import { categories } from "./CategoriesData";


const Categories = () => {
    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    return (
        <Container>
            <div className="flex items-center justify-between pt-4 overflow-x-auto">
                {
                    categories.map(item => <Box key={item.label} icon={item.icon} label={item.label} selected={category === item.label}></Box>)
                }
            </div>
        </Container>
    );
};

export default Categories;