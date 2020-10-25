<template>
  <section class="section__banner p-t-b-150">
    <div class="wrapper--full-bled">
      <div class="section__banner-wrapper anim-image">
        <div class="section__banner-theme" />
        <div class="section__event">
          <div class="hero__content--center table-content">
            <div class="p-t-b-50">
              <div class="table-cell">
                <div class="col-xs-12 col-md-12">
                  <h5 class="text-white horizontal-center animated__l">
                    {{ data.date }} <br> {{ data.location }}
                  </h5>
                  <div v-inview:once.enter="inviewEnter" class="p-t-b-50 animated__h">
                    <h2 class="text-white split__headline">
                      {{ data.title }}
                    </h2>

                    <p class="split__paragraph">
                      {{ data.description }}
                    </p>
                  </div>
                  <a :href="data.link.url" class="btn--primary horizontal-center" target="_blank">
                    <span>{{ data.cta }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true }
  },

  data () {
    return {
      inviewEnter: this.$inviewEnter
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~/assets/sass/base/_index.scss';

    .section__event {
        justify-content: center;
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: center;
        align-self: center;
        margin: auto;
        text-align: center;
        height: 100%;
        width: 100%;
        position: relative;
        @include clearfix;

        .hero__content--center {
            position: relative;

            @include breakpoint(md){
                max-width: 60rem;
            }
            @include breakpoint(lg){
                width: percentage(.70);
            }
            @include breakpoint(xl){
                width: percentage(.70);
            }
        }

        &:before {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            content: '';
            background-color: $primary-color;
        }
        h2 {
            margin: 0 auto;
            text-align: center;
        }
        P {
            color : $white;
            padding: 20px 0;
        }
    }
</style>
