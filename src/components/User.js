import { connect } from "react-redux";

const User = (props) => {
    return (  
        <>
            <div className="ml-4">
            <img src={props.info.avatar_url} alt={props.info.login} className="img-user mb-5" />
            <p>{props.info.login}</p>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
	return {
        info: state.InfoUser
	};
};

export default connect(mapStateToProps)(User);