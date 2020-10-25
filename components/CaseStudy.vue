<template>
  <div class="project-item">
    <div v-inview:once.enter="inviewImageEnter" class="project-item-wrapper anim-image">
      <div v-bind:style="{ backgroundImage: `url(${project.image})` }" class="bg" />
    </div>

    <!-- <div class="device-wrapper">
      <div class="device-container">
        <div class="device in-device ">
          <img v-bind:src="project.phone" class="iphone" alt="">
          <div class="container-screen">
            <img v-bind:src="project.phone_image_one" alt="">
          </div>
        </div>

        <div class="device in-device ">
          <img v-bind:src="project.phone" class="iphone" alt="">
          <div class="container-screen">
            <img v-bind:src="project.phone_image_two" alt="">
          </div>
        </div>
      </div>
    </div> -->
    <div class="project-description">
      <div v-inview:once.enter="inviewEnter" class="text__preview animated__h">
        <h2 class="split__headline">
          {{ project.title }}
        </h2>
        <p class="split__paragraph">
          {{ project.description }}
        </p>
      </div>

      <n-link :to="project.url.cached_url" class="btn--primary">
        <span>{{ project.cta }}</span>
      </n-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: { type: Object, required: true }
  },

  data () {
    return {
      inviewEnter: this.$inviewEnter,
      inviewImageEnter: this.$inviewImageEnter
    }
  },

  created () {
      // eslint-disable-next-line no-console
      console.log('*************', this.project)

  }
}
</script>

<style scoped lang="scss">
    @import '~/assets/sass/base/_index.scss';
    @import '~/assets/sass/extends/_index.scss';

    .project-item {
        position: relative;
        overflow: visible;
        // padding: 20px 0;
        width: 100%;
        height: auto;
        margin: 20px 0;
        display: flex;
        flex-flow: column;
        padding: 20px 0 140px;

        @include breakpoint(lg){
          display: block;
          margin: 100px 0;
          padding: 150px 0 150px;
          height: 650px;
          display: flex;
          align-items: flex-end;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: flex-end;
        }

        &:nth-child(odd) {
            .project-item-wrapper {
                left: 0;
            }

            .device-wrapper {
                -webkit-box-ordinal-group: 2;
                -ms-flex-order: 1;
                order: 1;
                margin-left: 250px;
            }

            .project-description {
              -webkit-box-ordinal-group: 3;
              -ms-flex-order: 2;
              order: 2;
              width: 100%;
              padding-left: 15px;
              padding-right: 15px;
              margin-left: 0;
              margin-right: 0;
              
              @include breakpoint(lg){
                width: 30%;
                margin-right: 100px;
              }
            }
        }

        &:nth-child(even) {
          justify-content: space-between;

          .project-item-wrapper {
            right: 0;

            &.in-view {
              &:after {
                animation: slideIlluLeft 1s forwards;
                -webkit-animation: slideIlluLeft 1s forwards;
              }
            }
          }

          .device-wrapper {
              -webkit-box-ordinal-group: 3;
              -ms-flex-order: 2;
              order: 2;
              margin-right: 250px;
          }

          .project-description {
            width: 100%;
            -webkit-box-ordinal-group: 2;
            -ms-flex-order: 1;
            order: 1;
            padding-left: 15px;
            padding-right: 15px;
            margin-left: 0;
            margin-right: 0;

            @include breakpoint(lg){
              width: 30%;
              margin-left: 100px;
              position: absolute;
              left: 0;
            }
          }
        }

        &-wrapper {
            position: relative;
            top: 0px;
            height: 100%;
            width: 100%;
            overflow: hidden;
            background-color: rgba(0, 0, 0, 0.1);

            @include breakpoint(lg){
              position: absolute;
              width: 50%;
            }

            .bg {
                position: relative;
                padding-bottom: 66%;
                
                height: 100%;
                width: 100%;
                left: 0px;
                top: 0px;

                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;

                @include breakpoint(lg){
                  position: absolute;
                  padding-bottom: 0;
                }
            }
        }

        .project-description {
            position: relative;
            z-index: 1;
            padding-top: 40px;
            display: flex;
            width: 30%;
            padding-bottom: 20px;
            flex-direction: column;
            margin-left: 15px;
            margin-right: 15px;

            a {
                position: relative;
                bottom: 0;
                text-align: center;
                width: 70%;
            }

            @include breakpoint(lg){
              margin-left: 0;
              margin-right: 0;
              padding-top: 40px;
              padding-bottom: 60px;

              a {
                position: absolute;
                bottom: 0;
                width: auto;
              }
            }
        }

        .device-wrapper {
            // position: absolute;
            z-index: 1;
            right: 40%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;

            .device-container {
                width: 443px;
                height: 412px;
                position: relative;
                display: inline-block;
                vertical-align: middle;

                .device {
                    height: 100%;
                    position: absolute;
                    opacity: 0;

                    &:nth-child(1) {

                        &.in-device {
                            -webkit-animation-delay: 0.8s;
                            animation-delay: 0.8s;
                        }

                        left:0;
                    }

                    &:nth-child(2) {
                        &.in-device {
                            -webkit-animation-delay: 1s;
                            animation-delay: 1s;
                        }

                        right: 0;
                    }

                    filter: drop-shadow(0px 14px 28px rgba(0,0,0,0.3));
                    -webkit-filter: drop-shadow(0px 14px 28px rgba(0,0,0,0.3));
                    -moz-filter: drop-shadow(0px 14px 28px rgba(0,0,0,0.3));

                    .iphone {
                        height: 100%;
                        position: relative;
                        z-index: 1;
                    }

                    .container-screen {
                        overflow: hidden;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 89%;
                        height: 95.5%;
                        -webkit-transform: translate(-50%, -50%);
                        -ms-transform: translate(-50%, -50%);
                        transform: translate(-50%, -50%);

                        img {
                            width: 100%;
                            min-height: 100%;
                        }
                    }
                }
            }
        }
    }
</style>
