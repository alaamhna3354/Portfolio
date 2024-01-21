export { default as Button } from '../..\\components\\global\\Button.vue'
export { default as Title } from '../..\\components\\global\\Title.vue'
export { default as CommonFooter } from '../..\\components\\Common\\Footer.vue'
export { default as CommonHeader } from '../..\\components\\Common\\Header.vue'
export { default as HomeAbout } from '../..\\components\\Home\\About.vue'
export { default as HomeBlur } from '../..\\components\\Home\\Blur.vue'
export { default as HomeContact } from '../..\\components\\Home\\Contact.vue'
export { default as Home } from '../..\\components\\Home\\Home.vue'
export { default as HomeMyInfo } from '../..\\components\\Home\\MyInfo.vue'
export { default as HomeProjects } from '../..\\components\\Home\\Projects.vue'
export { default as HomeResume } from '../..\\components\\Home\\Resume.vue'
export { default as HomeServices } from '../..\\components\\Home\\Services.vue'
export { default as LoaderLoading } from '../..\\components\\Loader\\loading.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
