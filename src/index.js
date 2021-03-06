import assign from 'nano-assign'
import './style.css'

export default {
  name: 'StepIndicator',
  functional: true,
  props: {
    total: {
      type: Number,
      required: true
    },
    current: {
      type: Number,
      required: true
    },
    currentColor: {
      type: String,
      default: 'rgb(68, 0, 204)'
    },
    defaultColor: {
      type: String,
      default: 'rgb(130, 140, 153)'
    }
  },
  render(h, { props, data }) {
    const steps = []
    for (let i = 0; i < props.total; i++) {
      const color = i === props.current ? props.currentColor : props.defaultColor
      steps.push(h('div', {
        class: 'step-indicator',
        style: {color, borderColor: color}
      }, [i + 1]))
    }
    const attrs = assign({}, data, {
      class: ['step-indicators', data.class]
    })
    return h('div', attrs, [
      h('span', {class: 'step-indicators-line'}),
      ...steps
    ])
  }
}
