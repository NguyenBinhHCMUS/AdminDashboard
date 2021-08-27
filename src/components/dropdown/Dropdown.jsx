import React, { useRef } from 'react'
import './dropdown.css'


const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener('mousedown', (e) => {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active')
        } else {
            // user click outside toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active')
            }
        }
    })
}

const Dropdown = (props) => {

    const dropdown_toggle_e1 = useRef(null)
    const dropdown_content_e1 = useRef(null)

    clickOutsideRef(dropdown_content_e1, dropdown_toggle_e1)

    return (
        <div className="dropdown">
            <button ref={dropdown_toggle_e1} className="dropdown__toggle">
                {
                    props.icon ? <i className={props.icon}></i> : ''
                }
                {
                    props.badge ? <span className='dropdown__toggle-badge'>{props.badge}</span> : ''
                }
                {
                    props.customToggle ? props.customToggle() : ''
                }
                <div ref={dropdown_content_e1} className="dropdown__content">
                    {
                        props.contentData && props.renderItems ? props.contentData.map(
                            (item, index) => props.renderItems(item, index))
                            : ''
                    }
                    {
                        props.renderFooter ? (
                            <div className="dropdown__footer">
                                {
                                    props.renderFooter()
                                }
                            </div>
                        ) : ''
                    }
                </div>
            </button>
        </div>
    )
}
export default Dropdown;