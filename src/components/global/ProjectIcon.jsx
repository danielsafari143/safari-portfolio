import groupe from '../../assets/img/group.png';
export function ProjectIcon (props) {
    return (
        <><img className='redList-img ' src={groupe} alt="" /> <span style={{color: props.color}}>Project</span></>
    );
}