import './Discussion.css'

function Board_Item(props) {
    const { id, createdAt, title, author, avatarUrl} = props.data;

    return (
        <div className='Discussion'>
            <div className='discussion__container'>
                <div className='discussion__avatar__wrapper'>
                    <img src={avatarUrl} alt="profile"/>
                </div>
                <div className='discussion__content'>
                    <div className='discussion__title'>{title}</div>
                    <div className='discussion__info'>
                        <div className='discussion__author'>{author}</div>
                        <div className='discussion__date'>{createdAt}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Board_Item;