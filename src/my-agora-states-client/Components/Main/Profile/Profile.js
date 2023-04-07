import './Profile.css'

function Profile() {
    return (
        <div className='Profile'>
            <div className="grid__item">
                <div className="profile__container">
                    <div className="profile__info">
                        <img
                            src="../../images/profile.png"
                            className="profile__img grid__item"
                            alt="user_profile_img"/>
                        <div className="info-view">
                            <div className="info__title">
                                Kim-DaHam 님의 아고라
                                <img
                                src="../../images/grade-icon.png" className="grade__icon"
                                alt="grade_img"/>
                            </div>
                            <div className="info-email-grade">
                                times7749@naver.comㅤ
                                <a href="/">나의 등급 보기 ></a>
                            </div>
                            <div className="tag-box">
                                <div className="tag">SEB_FE_44</div>
                                <div className="tag">JavaScript</div>
                                <div className="tag">HTML/CSS</div>
                                <div className="tag">React.js</div>
                            </div>
                        </div>
                    </div>
                    <div className="profile__btn">
                        <input type="button" value="나의 질문 >"/>
                        <input type="button" value="질문하기 >"/>
                        <input type="button" value="나의 답변 >"/>
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default Profile;