
import {useRef ,useState, useEffect } from 'react'

export const clientVersion = 1.1;


export const fade = (hex, alpha) => {

    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
    }
    throw new Error('Bad Hex');

}


export const objFinder = (array,name) => {
    return (array.find(object => object.name === name).value);
}


//var inLocal = true;
export const imageFinder = "/MasterApi/getImage?filename=";
//export const imageFinder = "/images/";

var lastMessage = '';

export const saveException = (message,reload) => {
	
	if(message === lastMessage) return;
	
	typeof fetch != "undefined" && fetch('../../MasterApi/saveException', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
				Message: message,
				version: clientVersion,
				reload: reload
		})
	})

	lastMessage = message;
}




export function useScrollPercentage() {
  const scrollRef = useRef(null);
  const [scrollPercentage, setScrollPercentage] = useState(NaN);

  const reportScroll = e => {
    setScrollPercentage(getScrollPercentage(e.target));
  };

  useEffect(
    () => {
      const node = scrollRef.current;
      if (node !== null) {
        node.addEventListener("scroll", reportScroll, { passive: true });
        if (Number.isNaN(scrollPercentage)) {
          setScrollPercentage(getScrollPercentage(node));
        }
      }
      return () => {
        if (node !== null) {
          node.removeEventListener("scroll", reportScroll);
        }
      };
    },
    [scrollPercentage]
  );

  return [scrollRef, Number.isNaN(scrollPercentage) ? 0 : scrollPercentage];
}

function getScrollPercentage(element) {
  if (element === null) {
    return NaN;
  }
  const height = element.scrollHeight - element.clientHeight;
  return Math.round((element.scrollTop / height) * 100);
}
