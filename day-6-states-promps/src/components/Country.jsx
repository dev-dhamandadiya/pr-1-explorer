import State from "./State.jsx";

const Country = (props) => {
return (
    <>
<h2>Country: {props.country}</h2>
<State state={props.state} City={props.city} />
    </>
);
};

export default Country;