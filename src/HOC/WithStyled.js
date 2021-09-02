import styled from "styled-components/macro";

const saveException = (message,reload) => {
	
	// if(message === lastMessage) return;
	
	// typeof fetch != "undefined" && fetch('../../MasterApi/saveException', {
	// 	method: 'POST',
	// 	headers: {
	// 		'Accept': 'application/json',
	// 		'Content-Type': 'application/json',
	// 	},
	// 	body: JSON.stringify({
	// 			Message: message,
	// 			version: clientVersion,
	// 			reload: reload
	// 	})
	// })

	// lastMessage = message;
}


const styleConstructor = (style) => {
    const check = (name) => (
        Boolean(style.find(item => item.name === name)) ? style.find(item => item.name === name).setByCustomer : saveException('component: Navbar >>> variable: ' + name + + ' url: ' + (typeof window != "undefined" && window.location.current), true)
    )
    const get = (name , unit = "") => (
      `${Boolean(style.find(item => item.name === name)) ? style.find(item => item.name === name).value : saveException('component: Navbar >>> variable: ' + name + ' url: ' + (typeof window != "undefined" && window.location.current), true)}${unit}`
  )
    return {
        check,
        get
    }
  }

const WithStyled = (css , tagName) => {
    
    return ({ children , style , ...rest }) => {
		
        const { get , check } = styleConstructor(style)
        const Created = <div {...rest} css={css({ get , check })}>{children}</div>;
        return Created
    }
}


export default WithStyled;