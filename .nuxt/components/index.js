export const Button = () => import('../..\\components\\global\\Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c))
export const Title = () => import('../..\\components\\global\\Title.vue' /* webpackChunkName: "components/title" */).then(c => wrapFunctional(c.default || c))
export const CommonFooter = () => import('../..\\components\\Common\\Footer.vue' /* webpackChunkName: "components/common-footer" */).then(c => wrapFunctional(c.default || c))
export const CommonHeader = () => import('../..\\components\\Common\\Header.vue' /* webpackChunkName: "components/common-header" */).then(c => wrapFunctional(c.default || c))
export const LoaderLoading = () => import('../..\\components\\Loader\\loading.vue' /* webpackChunkName: "components/loader-loading" */).then(c => wrapFunctional(c.default || c))
export const HomeAbout = () => import('../..\\components\\Home\\About.vue' /* webpackChunkName: "components/home-about" */).then(c => wrapFunctional(c.default || c))
export const HomeBlur = () => import('../..\\components\\Home\\Blur.vue' /* webpackChunkName: "components/home-blur" */).then(c => wrapFunctional(c.default || c))
export const HomeContact = () => import('../..\\components\\Home\\Contact.vue' /* webpackChunkName: "components/home-contact" */).then(c => wrapFunctional(c.default || c))
export const Home = () => import('../..\\components\\Home\\Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c))
export const HomeMyInfo = () => import('../..\\components\\Home\\MyInfo.vue' /* webpackChunkName: "components/home-my-info" */).then(c => wrapFunctional(c.default || c))
export const HomeProjects = () => import('../..\\components\\Home\\Projects.vue' /* webpackChunkName: "components/home-projects" */).then(c => wrapFunctional(c.default || c))
export const HomeResume = () => import('../..\\components\\Home\\Resume.vue' /* webpackChunkName: "components/home-resume" */).then(c => wrapFunctional(c.default || c))
export const HomeServices = () => import('../..\\components\\Home\\Services.vue' /* webpackChunkName: "components/home-services" */).then(c => wrapFunctional(c.default || c))

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
