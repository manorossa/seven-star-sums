import React from 'react';

    const Answer = ({answers, clicked}) => {
        let answerMap = answers.map( ( answer, index ) => {
            return <button 
                key={index}
                value={answer}
                clicked={( event ) => clicked(event, answer)}>{answer} </button>
            // return <Person
            //   click={() => props.clicked( index )}
            //   name={person.name}
            //   age={person.age}
            //   key={person.id}
            //   changed={( event ) => props.changed( event, person.id )} />
          } );

        return (
            <div className='container'>
                <div>Choose an answer</div>
                {answerMap}
            </div>
        )
    }

export default Answer;