import React from 'react';
export default function Shadow(props) {
return props.show ? <div onClick={props.close} className="fixed top-0 left-0 z-40 w-full h-full bg-black bg-opacity-50"></div> : null
}