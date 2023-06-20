import './LightLayout.css';

function LightLayout(props){
    return(
        <div className='main-layout'>
            {props.children}
        </div>
    )
}

export default LightLayout;