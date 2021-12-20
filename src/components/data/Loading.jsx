import style from './Loading.module.css'

const Loading = () => {
    return (
        <div className={style.loadingContainer}>
            <span className={`material-icons ${style.loadingIcon}`}>sync</span>
            <div>loading</div>
        </div>
    )
}

export default Loading