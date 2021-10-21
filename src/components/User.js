import { connect } from "react-redux";

const User = (props) => {
    return (  
        <>
            <img src={props.info.avatar_url} alt={props.info.login} />
            <p>{props.info.login}</p>
        </>
    );
}

const mapStateToProps = (state) => {
	return {
        info: state.InfoUser
	};
};

export default connect(mapStateToProps)(User);