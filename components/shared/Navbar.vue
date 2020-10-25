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
      </ul>

      <dl class="component--site-contact tw--grid tw--gap-1 tw--grid-cols-2 desk-lg:tw--grid-cols-2 footer-contact desk:tw--col-span-2" data-v-3987a20c="">
        <div class="contact-section-address tw--col-span-2 tw--row-start-1 desk-lg:tw--col-span-3" data-v-3987a20c="">
          <dt class="contact-heading h5" data-v-3987a20c="">
            Location
          </dt>
          <dd class="contact-content" data-v-3987a20c="">
            3344 Peachtree Rd NE Suite 800
            <br data-v-3987a20c="">
            Atlanta, GA 30326
          </dd>
        </div>
        <div class="contact-section-inquiries tw--col-span-2 tw--row-start-1 desk-lg:tw--col-span-3 desk-lg:tw--row-start-2" data-v-3987a20c="">
          <dt class="contact-heading h5" data-v-3987a20c="">
            Say Hi
          </dt>
          <dd data-v-3987a20c=""><a href="mailto:hello@innatetheory.com" class="contact-link light contact-content" data-v-3987a20c="">
            hello@innatetheory.com
            </a>
          </dd>
        </div>
      </dl>

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
  @import '~/assets/sass/base/_index.scss';
  @import '~/assets/sass/extends/_index.scss';

  .is-active {
    .component--site-contact {
      visibility: visible;
      // opacity: 1;

      @include navigation-animation("contact");
    }

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
              padding: 20px 0;

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

  .desk\:tw--flex {
    display: flex;
  }

  .desk\:tw--justify-between {
    justify-content: space-between;
  }

  .desk\:tw--grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  .desk\:tw--col-span-12 {
    grid-column: span 12/span 12;
  }

  .desk\:tw--col-span-5 {
    grid-column: span 5/span 5;
  }

  .desk-lg\:tw--col-span-3 {
    grid-column: span 3/span 3;
  }

  .desk-lg\:tw--col-span-2 {
    grid-column: span 2/span 2;
  }

  .desk\:tw--gap-1 {
    grid-gap: 20px;
    gap: 20px;
  }

  .desk\:tw--grid {
    display: flex;
    flex-flow: column;

    @include breakpoint(lg){
      display: grid;
    }
  }

  .desk\:tw--col-span-7 {
    grid-column: span 7/span 7;
  }

  .desk-lg\:tw--grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .tw--grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }


  .tw--grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .tw--gap-1 {
    grid-gap: 20px;
    gap: 20px;
  }

  .desk-lg\:tw--row-start-2 {
    grid-row-start: 2;
  }

  .tw--row-start-1 {
    grid-row-start: 1;
  }

  .tw--col-span-4 {
    grid-column: span 4/span 4;
  }

  .tw--col-span-2 {
    grid-column: span 2/span 2;
  }

  .tw--row-start-2 {
    grid-row-start: 2;
  }

  .tw--grid {
    display: grid;
  }

  .desk\:tw--inline {
    display: inline;
  }

  .component--site-contact {
    width: 400px;
    padding-top: 40px;
    padding-left: 0;
    margin-bottom: 0;
    background: $black;
    color: $white;
    position: relative;
    opacity: 0;
    display: flex;
    flex-flow: column;
    @include Transition;

    @include breakpoint(lg){
      display: grid;
    }

    .contact-content {
      display: block;
      font-size: 12px;
      line-height: 18px;
    }

    .global--container {
      padding: 0;
      margin: 0 auto;
    }

    .global--edge-inset {
      padding-left: 70px;
      padding-right: 70px;
    }

    .component--site-contact {
      .contact-section-address {
        .contact-heading {

        }
      }
    }

    .contact-social-item {
      display: inline-block;
      margin-right: 20px;

      a {
        color: $white;
        font-family: $font-avalon-bold;
      }
    }

    .footer-headline {
      margin-bottom: 40px;

      @include breakpoint(lg){
        margin-bottom: 140px;
      }
    }

    .footer-legal {
      flex-flow: column;

      p {
        font-size: 14px;
      }

      a {
        font-size: 14px;

      }

      @include breakpoint(lg){
        flex-flow: row;
      }

      .component--site-logo {
        img {
          width: 180px;
        }
      }

      .legal-content {
        margin: 20px 0;
        display: flex;
        flex-flow: column;

        @include breakpoint(lg){
          margin: 0;
          display: block;
        }

        .footer-copyright {
          margin: 0;

          @include breakpoint(lg){
            margin-right: 20px;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
</style>
