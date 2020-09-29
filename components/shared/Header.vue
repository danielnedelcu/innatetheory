<template>
  <header class="header fullscreen-menu ">
    <div class="wrapper">
      <div class="header-wrapper">
        <a class="logo">
          <logo />
        </a>
        <div id="nav-menu" v-on:click="onMenuClick" v-bind:class="{'active' : showModal}">
          <span class="btn_menu_line" />
          <span class="btn_menu_line" />
          <span class="btn_menu_line" />
          <span class="touch-button"><i class="navicon">▼</i></span>
        </div>

        <div id="overlay-menu" v-bind:class="{'active' : showModal}" style="">
          <navbar />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import store from '~/store'
import { ASSIGN_OVERLAY_STATE } from '~/constants/actions.type'
import Navbar from '~/components/shared/Navbar.vue'
import Logo from '~/components/Logo.vue'

export default {
  store,

  components: {
    Navbar, Logo
  },

  data () {
    return {
      // counter: this.showModal
    }
  },

  computed: {
    ...mapGetters({ showModal: 'getOverlayState' })
  },

  mounted () {
    this.$root.$on('my-event', this.onMenuClick)
  },

  methods: {
    ...mapActions({
      OverlayAction: ASSIGN_OVERLAY_STATE
    }),

    onMenuClick () {
      // eslint-disable-next-line no-console
      this.OverlayAction(this.showModal ^= 1)
    }
  }
}
</script>

<style scoped lang="scss">
    @import '~/assets/sass/base/mixins/THEORY.transitions.scss';
    @import '~/assets/sass/base/mixins/THEORY.animations.scss';
    @import '~/assets/sass/base/THEORY.fonts.scss';

    .header {
        background-color: transparent;
        font-size: 0;
        left: 0;
        top: 0;
        z-index: 8;
        position: fixed;
        width: 100%;

        .header-wrapper {
            .logo {
                float: left;
                width: 180px;
                margin: 40px 0;
            }

            #nav-menu {
                float: right;
                height: 20px;
                margin: 40px 0;
                cursor: pointer;
                position: relative;
                z-index: 100;
                @include Transition;

                .btn_menu_line {
                    height: 3px;
                    width: 23px;
                    margin: 3px 0px 3px 0px;
                    background-color: #000;
                    display: block;
                    right: 0;
                    @include Transition;

                    &:first-child {
                        width: 12px;
                        margin-left: 11px;
                    }

                    &:nth-child(3) {
                        width: 18px;
                        margin-left: 5px;
                    }
                }

                &:hover {
                    .btn_menu_line {
                        width: 23px!important;
                        margin-left: 0!important;
                    }
                }
            }
        }

        &.fullscreen-menu {
            #nav-menu {
                &.active {
                    margin-right: -3px;
                    z-index: 2000;

                    .btn_menu_line {
                        background-color: #FFF;

                        &:nth-child(1) {
                            -webkit-transform: rotate(45deg);
                            -moz-transform: rotate(45deg);
                            -ms-transform: rotate(45deg);
                            -o-transform: rotate(45deg);
                            transform: rotate(45deg);
                            width: 24px!important;
                            margin-left: 0!important;
                            margin-top: 10px;
                            background-color: #FFF;
                            @include Transition;
                        }

                        &:nth-child(2) {
                            opacity: 0;
                        }

                        &:nth-child(3) {
                            -webkit-transform: rotate(-45deg);
                            -moz-transform: rotate(-45deg);
                            -ms-transform: rotate(-45deg);
                            -o-transform: rotate(-45deg);
                            transform: rotate(-45deg);
                            width: 24px!important;
                            margin-left: 0!important;
                            margin-top: -12px;
                        }
                    }
                }
            }

        }
    }

    #overlay-menu {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
        left: 0;
        opacity: 0;
        position: fixed;
        visibility: hidden;
        overflow-x: hidden;
        overflow-y: hidden;
        transition: 0.3s all cubic-bezier(0.3, 1, 0.1, 1);
        -webkit-transition: 0.3s all cubic-bezier(0.3, 1, 0.1, 1);
        -moz-transition: 0.3s all cubic-bezier(0.3, 1, 0.1, 1);
        -ms-transition: 0.3s all cubic-bezier(0.3, 1, 0.1, 1);
        -o-transition: 0.3s all cubic-bezier(0.3, 1, 0.1, 1);

        &.active {
            visibility: visible;
            opacity: 1;
        }
    }

    .screen--dark {
        background-color: #121212;
    }

</style>
