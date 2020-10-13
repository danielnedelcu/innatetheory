<template>
  <nav v-bind:class="{'is-active' : showModal}" class="menu-nav wrapper" style="touch-action: pan-y;">
    <div class="menu-nav__col">
      <ul class="menu-nav__ul menu-nav__ul">
        <li v-on:click="closeMenu" class="menu-nav__li menu-nav__li--work">
          <n-link to="/" class="btn-menu">
            Home
          </n-link>
        </li>

        <li v-on:click="closeMenu" class="menu-nav__li menu-nav__li--who-we-are">
          <nuxt-link to="/about" class="btn-menu">
            Who We Are
          </nuxt-link>
        </li>

        <li v-on:click="closeMenu" class="menu-nav__li menu-nav__li--what-we-do">
          <n-link to="/services" class="btn-menu">
            What We Do
          </n-link>
        </li>

        <li v-on:click="closeMenu" class="menu-nav__li menu-nav__li--what-we-do">
          <n-link to="/projects" class="btn-menu">
            Our Work
          </n-link>
        </li>

        <li v-on:click="closeMenu" class="menu-nav__li menu-nav__li--what-we-do">
          <n-link to="/thoughts" class="btn-menu">
            Thoughts
          </n-link>
        </li>

        <li v-on:click="closeMenu" class="menu-nav__li menu-nav__li--contact">
          <n-link to="/contact" class="btn-menu">
            Contact Us
          </n-link>
        </li>
      </ul>

      <ul class="social-nav__ul">
        <li class="social-nav__li">
          <a href="https://www.instagram.com/innatetheory" class="social-nav__a btn-social" target="_blank">
            Ig
          </a>
        </li>
        <li class="social-nav__li">
          <a href="https://www.facebook.com/innatetheory" class="social-nav__a btn-social" target="_blank">
            Fb
          </a>
        </li>

        <li class="social-nav__li">
          <a href="https://twitter.com/innatetheory" class="social-nav__a btn-social" target="_blank">
            Tw
          </a>
        </li>

        <li class="social-nav__li">
          <a href="https://www.linkedin.com/company/innatetheory" class="social-nav__a btn-social" target="_blank">
            In
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ showModal: 'getOverlayState' })
  },

  methods: {
    closeMenu () {
      this.$root.$emit('my-event')
    }
  }
}
</script>

<style scoped lang="scss">
    @import '~/assets/sass/base/mixins/THEORY.transitions.scss';
    @import '~/assets/sass/base/mixins/THEORY.animations.scss';
    @import '~/assets/sass/base/THEORY.fonts.scss';

  .is-active {

      .menu-nav__ul, .social-nav__ul {
          .menu-nav__li, .social-nav__li {
              visibility: visible  ;
              opacity: 1 ;

              @include navigation-animation("menu");

          }
      }

      .social-nav__ul {
          .social-nav__li {
              @include navigation-animation("social");
          }
      }

  }

  nav {
      // width: 85%;
      margin: 0 auto;
      height: 100vh;

      .menu-nav__col {
          padding-top: 70px;

          .menu-nav__ul {
              padding: 0;

              .menu-nav__li {
                  @include Transition;
                  opacity: 0;
              }
          }

          .social-nav__ul {
              padding: 40px 0;

              .social-nav__li {
                  @include Transition;
                  opacity: 0;

                  a {
                      color: #fff;
                      font-size: 14px;
                      margin: 5px 0;
                      display: inline-block;
                      font-family: $font-avalon-bold;

                      &:hover {
                          color: #fff !important;
                      }
                  }

              }
          }
      }
  }
</style>
