export default function WhatWeDoItem (props) {
    return (
        <div class="what-we-do-item">
                    <div class="what-we-do-item__icon">
                        <img src={props.service.icon} alt="design" />
                    </div>
                    <div class="what-we-do-item__content">
                        <div class="what-we-do-item__title">
                        {props.service.title}
                        </div>
                        <div class="what-we-do-item__text">
                        {props.service.text}
                        </div>
                    </div>
                </div>
    )
}