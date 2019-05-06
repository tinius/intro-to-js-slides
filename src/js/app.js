import Reveal from 'reveal'

import hljs from 'highlightjs'
import prism from 'prismjs'
import microlight from 'microlight'

Reveal.initialize({
    width: '100%',
    height : '100%',
    transition: 'fade',
    slideNumber : true
})

prism.highlightAll()

microlight.reset()