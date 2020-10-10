<template>
  <footer role="contentinfo" class="component--site-footer site-footer">
    <div class="global--container desk:tw--grid desk:tw--gap-1 desk:tw--grid-cols-12 wrapper">
      <div class="b-corp footer-headline desk:tw--col-span-7">
        <div title="Certified B Corporation®" rel="noopener noreferrer">
          <BCoprLogo />
        </div>
      </div>
      <dl class="component--site-contact tw--grid tw--gap-1 tw--grid-cols-4 desk-lg:tw--grid-cols-5 footer-contact desk:tw--col-span-5">
        <div class="contact-section-address tw--col-span-2 tw--row-start-1 desk-lg:tw--col-span-3">
          <dt class="contact-heading h5">
            Location
          </dt>
          <dd class="contact-content">
            3340 Peachtree Road NE
            <br>
            Atlanta, GA 30326
          </dd>
        </div>
        <div class="contact-section-inquiries tw--col-span-2 tw--row-start-1 desk-lg:tw--col-span-3 desk-lg:tw--row-start-2">
          <dt class="contact-heading h5">
            Say Hi
          </dt>
          <dd>
            <a href="mailto:hello@innatetheory.com" class="contact-link light contact-content">
              hello@innatetheory.com
            </a>
          </dd>
        </div>
        <div class="contact-section-social tw--row-start-2 tw--col-span-4 desk-lg:tw--row-start-1 desk-lg:tw--col-span-2">
          <dt>
            <div class="contact-heading h5">
              Social
            </div>
            <p class="contact-content text-white">
              You can always find us on social.
            </p>
          </dt>
          <dd class="contact-social-item">
            <a aria-label="Facebook" href="https://www.facebook.com/innatetheory" rel="noreferrer" target="_blank" class="component--social-icon light contact-social-icon">
              Fb
            </a>
          </dd>
          <dd class="contact-social-item">
            <a aria-label="LinkedIn" href="https://www.linkedin.com/company/innatetheory/" rel="noreferrer" target="_blank" class="component--social-icon light contact-social-icon">
              In
            </a>
          </dd>
          <dd class="contact-social-item">
            <a aria-label="Twitter" href="https://twitter.com/innatetheory" rel="noreferrer" target="_blank" class="component--social-icon light contact-social-icon">
              Tw
            </a>
          </dd>
          <dd class="contact-social-item">
            <a aria-label="Instagram" href="https://www.instagram.com/innatetheory/" rel="noreferrer" target="_blank" class="component--social-icon light contact-social-icon">
              Ig
            </a>
          </dd>
        </div>
      </dl>
      <div class="footer-legal desk:tw--col-span-12 desk:tw--flex desk:tw--justify-between">
        <a href="/" class="component--site-logo">
          <Logo />
        </a>
        <div class="legal-content">
          <p class="footer-copyright desk:tw--inline text-white">
            ©2020 InnateTheory ·&nbsp;All rights reserved
          </p>
        
          <n-link to="/termsandconditions" class="legal-link component--base-link global--cta secondary light">
            Terms &amp; Conditions
          </n-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '~/components/LogoWhite.vue'
import BCoprLogo from '~/components/BCertified.vue'

export default {
  components: {
    Logo,
    BCoprLogo
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/sass/base/_index.scss';
  @import '~/assets/sass/extends/_index.scss';


  .component--site-footer {
    padding-top: 50px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    background: $black;
    color: $white;
    position: relative;

    @include breakpoint(lg){
      padding-top: 93px;
    }

    .global--container {
      padding: 0;
      margin: 0 auto;
    }

    .global--edge-inset {
      padding-left: 70px;
      padding-right: 70px;
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
      .contact-section-address {
        .contact-heading {

        }
      }

      .contact-content {
        font-size: 14px;
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
