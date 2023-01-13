import React from 'react';

export const Success = ({ clickSuccess, count }) => {
    return (
        <div className="success-block">

            <h3>Успешно!</h3>
            <p>Всем {count} пользователям отправлено приглашение.</p>
            <button onClick={clickSuccess} className="send-invite-btn">Назад</button>
        </div>
    );
};

