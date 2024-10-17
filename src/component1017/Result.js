import React from 'react';

function Result(props) {
    // 숫자 2개, 문자(연산자) 받아서 결과물을 출력
    return (
        <div>
            결과 : {props.result}
        </div>
    );
}

export default Result;