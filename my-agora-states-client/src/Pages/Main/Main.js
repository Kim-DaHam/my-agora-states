import { useEffect, useState } from 'react'
import { call } from '../../service/ApiService.js'

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Profile from '../../Components/Main/Profile/Profile'
import Category from '../../Components/Main/Category/Category'
import Discussion from '../../Components/Discussion/Discussion'

import './Main.css'

function Main() {
    const [recentDiscussions, setRecentDiscussions] = useState([]);
    const [hotTopics, setHotTopics] = useState([]);

    useEffect(()=>{
        call("/discussions/recent", "GET").then((res)=>{
            setRecentDiscussions(res);
        })
    },[])

    return (
        <div className='Main'>
            <Header/>
            <div className="contents__area">
                <section className="intro__container">
                    <div className="grid__item">
                        <div className="intro__codestates">
                            <img
                                src="/images/full-logo.png"
                                className="intro__logo grid__item"
                                alt="intro_logo_img"/>
                            <div className="intro__content grid__item">
                                <div className="intro__title grid__item">
                                    우리들의 소중한 질문 공간,<br/>여기는 아고라 스테이츠 입니다.
                                </div>
                                <div className="intro__text grid__item">
                                    내가 알고있는 지식을 공유하고, 처음 보는 질문에 대해 같이 고민해봐요. 함께 고민하며 나아가는 과정을 통해...
                                </div>
                            </div>
                        </div>
                    </div>
                    <Profile/>
                </section>

                <section className="category__container">
                    <Category/>
                </section>

                <section className="mini__board__container">
                    <section className="recent__discussion__container grid__item">
                        <label>최근 올라온 질문</label>
                        <div className="recent__discussion__wrapper">
                            <ul className="recent-discussion-list">
                                {
                                    recentDiscussions.map((discussion, idx)=>{
                                        return <li key={idx}><Discussion data={discussion}/></li>
                                    })
                                }
                            </ul>
                            <a className="more__link" href="/board?category=전체질문&page=1">더 알아보기 ></a>
                        </div>
                    </section>
                    <section className="hot__topic__container grid__item">
                        <div className="grid__item">
                            <label>이번주 HOT 토픽! 가장 많은 사람들이 고민한 질문이에요.</label>
                            <div className="hot__topic__wrapper">
                                <ul className="hot__topic__list">
                                </ul>
                                <a className="more__link">더 알아보기 ></a>
                            </div>
                        </div>
                        <div className="grid-item">
                            {/* <div>
                                머리풀기용 간단 질문 & 퀴즈
                            </div> */}
                        </div>
                    </section>
                </section>

                <section className="how__to__use">
                    <p>아고라 스테이츠 이용 전 꿀팁 가이드 💡✨</p>
                    <ul>
                        <li>어떤 질문이 좋은 질문일까요? 알아보기 쉬운 질문 작성법을 알려드릴게요.</li>
                        <li>이용 전 알아야 할 아고라 스테이츠 기본 규칙에 대해 알아보세요 :)</li>
                        <li>내가 알고있는 걸 쉽게 풀어 설명하는 게 어려우신가요? 그 방법을 알려드릴게요.</li>
                    </ul>
                </section>
            </div>

            <Footer/>
        </div>
    )
}

export default Main;