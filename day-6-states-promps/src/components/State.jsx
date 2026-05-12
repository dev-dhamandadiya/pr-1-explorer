import City from "./City.jsx";

const State = (props) => {
return (
    <>
    <h3>State: {props.state}</h3>

<City City={props.city} />
    </>
);
};

export default State;