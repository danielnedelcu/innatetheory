<template>
  <section>
    <HeroSimple :data="heroSimpleObj" />
    <section class="section__sitecore">
      <div class="sitecore-wrapper d-flex justify-between wrapper">
        <div class="col-md-6">
          <h2>Sitecore Development</h2>
        </div>
        <div class="col-md-6">
          <p>Our dedicated team of Sitecore certified developers, combined with the strategic 
            thinking of our marketeers makes scoping any solution or migration completely robust. 
            We can deliver projects of any scale in its entirety or collaborate with in-house teams to 
            deliver a compelling solution. Our team members are known to deliver the highest level of 
            technical competence and expertise.</p>
        </div>
      </div>
    </section>

    <section class="section__sitecore">
      <div class="sitecore-wrapper d-flex justify-between wrapper">
        <div class="col-md-6">
          <h2>Sitecore Personalization</h2>

          <div class="sitecore-list">
            <ul>
              <li>
                Rules-based targeting
              </li>
             <li>
                Sitecore Experience Database
              </li>
             <li>
                Anonymous personalisation
              </li>
             <li>
                Cross-channel automation
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <p>To enhance customer experience we will create implement a successful Sitecore personalization strategy for your organization. 
            We will do this quickly and efficiently and unlock the power of the Sitecore platform.</p>


          <div class="sitecore-list bulleted">
            <p>
              As part of our personalization offering, we will help you:
            </p>
            <ul>
              <li>
                Identify your target audiences and how best to engage with them
              </li>
              <li>
                Create a marketing personalisation strategy that aligns with your overall business goals
              </li>  
              <li>
                Set business objectives for personalisation, with clear Key Performance Indicators (KPIs) to help you measure success and show a return on investment
              </li>
              <li>
                Use Sitecore’s set of marketing tools to test, develop, optimise and evolve your personalisation strategy
              </li>              
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section__sitecore">
      <div class="sitecore-wrapper d-flex justify-between wrapper">
        <div class="col-md-6">
          <h2>Sitecore Support</h2>

          <div class="sitecore-list">
            <ul>
              <li>
                Sitecore Audit
              </li>
             <li>
                Azure Hosting with Enterprise-level Security
              </li>
             <li>
                Sitecore Training
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <p>
            InnateTheory will provide critical, unparallel support for automated site testing, performance tuning and other critical audits because your website is critical to your overall business goals.
          </p>
          <p>
            With the rise of cloud hosting, our clients can now have a tailored, scalable hosting configuration matched to their budget and needs. From cost efficient single server solutions to robust enterprise level infrastructure comprising multiple servers, real time replication and failover solutions, we will help you define and design the right hosting option for your project.
          </p>
          <p>
            We also provide Sitecore training to help users squeeze maximum value from the product. These could be marketers, business users and developers. During these workshops we’ll help you align Sitecore marketing goals with your business objectives, define your customer segments and devise personalisation and optimisation plan and campaigns.
          </p>

        </div>
      </div>
    </section>
    <BannerLink label="Lets Talk Sitecore" url="/contact" />
  </section>
</template>

<script>
import { createSEOMeta } from '../utils/seo'
import HeroSimple from '~/components/HeroSimple.vue'
import BannerLink from '~/components/BannerLink.vue'
import Services from '~/services/services.js'

export default {
  components: {
    HeroSimple,
    BannerLink
  },

  data () {
    return {
      inviewEnter: this.$inviewEnter,
      title: 'Innate Theory | Sitecore Offerings'
    }
  },

  head () {
    return {
      title: this.title,
      author: this.author,
      meta: [
        ...createSEOMeta({
          description: "Find out how Sitecore’s customer experience systems enhance business strategies.",
          title: this.title
        })
      ]
    }
  },

  async asyncData (context) {
    /**
     * Rtrieves all homepage data from Storyblok
     */
    const response = await Services.getData('sitecore')
    const contentArrr = response.data.stories[0].content.body

    // eslint-disable-next-line no-console
    console.dir(contentArrr)

    const convertArrayToObject = (array, key) =>
      // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj = item), obj), {})
    return {
      heroSimpleObj: convertArrayToObject(contentArrr.filter(e => e.component === 'hero-simple'))
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~/assets/sass/base/_index.scss';

  .section__sitecore {
    background-color: $i;
    padding: 220px 0;

    .sitecore-wrapper {
      .sitecore-list {
        &.bulleted {
          ul {
            list-style: disc;
            margin-left: 20px;

            li {
              padding: 5px 0;
            }
          }
        }
      }
    }
  }
</style>
