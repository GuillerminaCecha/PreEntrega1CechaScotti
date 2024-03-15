import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <>
        <h6>La Reina Dorada</h6>
        <ul>
            <li><a href="#">Alimentos</a></li>
            <li><a href="#">Cosmetica</a></li>
            <li><a href="#">Indumentaria</a></li>
        </ul>
        <CartWidget />
        </>
    );
};