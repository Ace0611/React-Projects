import React from "react";

export function PopoverButton({buttonText, popoverContent}){
    const [popover, setPopover] = React.useState(false);
    const [show, setShow] = React.useState('')
    return(
    <>
      <button className="popover-button" onMouseOver={() => {
        setPopover(true)
        setShow('show')
      }} onMouseLeave={() => {
        setPopover(false)
        setShow('')
        }}>{buttonText}</button>
      {popover && <>
        <div className='arrow'/>
        <section className={`popover ${show}`}>{popoverContent}</section></>
      }
    </>
    )
}