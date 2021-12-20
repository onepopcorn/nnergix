import style from './LoadingError.module.css'

const LoadingError = () => {
    return (
        <div className={style.errorContainer}>
            <div className={style.errorHeader}>Ooops!</div>
            <div>something went wrong while fetching data</div>
        </div>

    )
}

export default LoadingError