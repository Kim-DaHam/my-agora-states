import {Link} from 'react-router-dom'

import './Category.css'

function Category() {
    return (
        <div className='Category'>
            <section className="category__wrapper">
                <div className="grid__item">
                    <Link to="/board?category=전체질문&page=1">전체 질문</Link>
                </div>
                <div className="grid__item">급해요 급해!</div>
                <div className="grid__item">라이브 세션 질문</div>
                <div className="grid__item">핫 토픽</div>
                <div className="grid__item">느긋한 질문</div>
                <div className="grid__item">기타 문의</div>
            </section>
        </div>
    )
}

export default Category;