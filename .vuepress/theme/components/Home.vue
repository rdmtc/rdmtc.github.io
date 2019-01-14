<template>
  <div class="home">
    <div class="hero">
      <img class="logo"
        v-if="data.heroImage"
        :src="logoSrc"
        alt="RedMatic"
        title="RedMatic"
      >

      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p
        class="action"
        v-if="data.actionText && data.actionLink"
      >
        <a href="https://github.com/HM-RedMatic/RedMatic/releases" rel="noopener" class="nav-link action-button">
          Download
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 0.1rem; height: 1.2rem">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </a>
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p>
    </div>

    <div
      class="features"
      v-if="data.features && data.features.length"
    >
      <div
        class="feature"
        v-for="(feature, index) in data.features"
        :key="index"
      >
        <h2>{{ feature.title }}</h2>
        <p><span v-html="feature.details"></span></p>
        <div v-if="feature.image">
          <img :src="feature.image">
        </div>
      </div>
    </div>

    <Content class="custom"/>

    <div
      class="footer"
      v-if="data.footer"
    >
      <div>
        <p>
        Diese Webseite befindet sich derzeit noch im Aufbau, das Projekt lebt durch die Community -
        <a href="/doku/RedMatic/99_mitarbeit.html">Helfe mit</a>
        und mach RedMatic noch besser.
        <p>
        <p style="font-size: 9px">
          <a href="https://github.com/HM-RedMatic/HM-RedMatic.github.io/blob/dev/impressum.md">Impressum und Datenschutzhinweise</a><br>
          RedMatic © 2018 Sebastian Raff and RedMatic Contributors, licensed under <a href="https://github.com/HM-RedMatic/RedMatic/blob/master/LICENSE">Apache License 2.0</a><br>
          RedMatic Documentation © 2018 Sebastian Raff and RedMatic Contributors, licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA License 4.0</a><br>
          <a href="https://github.com/HM-RedMatic/RedMatic/blob/master/LICENSES.md">Third Party Licenses</a>
        <p>
      </div>
      <!--<p>
        {{ data.footer }}
      </p>-->
    </div>
  </div>
</template>

<script>
  import NavLink from '@vuepress/theme-default/components/NavLink.vue'

  export default {
    components: { NavLink },

    computed: {
      data() {
        return this.$page.frontmatter
      },
      logoSrc() {
        let src = this.$withBase(this.data.heroImage);
        if(typeof document === 'object' && document.body.classList.contains('dark')) {
          src = src.replace(/(\..{3})$/, '-dark$1');
        }
        return src;
      },

      actionLink() {
        return {
          link: this.data.actionLink,
          text: this.data.actionText
        }
      }
    }
  }
</script>

<style lang="stylus">
  .home
    padding $navbarHeight 2rem 0
    max-width 960px
    margin 0px auto

    .hero
      text-align center

      img
        max-width: 100%
        max-height 280px
        display block
        margin 3rem auto 1.5rem

      h1
        font-size 3rem

      h1, .description, .action
        margin 1.8rem auto

      .description
        max-width 35rem
        font-size 1.6rem
        line-height 1.3
        color lighten($textColor, 40%)

      .action-button
        display inline-block
        font-size 1.2rem
        color #fff
        background-color $accentColor
        padding 0.8rem 1.6rem
        border-radius 4px
        transition background-color .1s ease
        box-sizing border-box
        border-bottom 1px solid darken($accentColor, 10%)
        margin: 0 0.2rem;

        &:hover
          background-color lighten($accentColor, 10%)

    .features
      border-top 1px solid $borderColor
      padding 1.2rem 0
      margin-top 2.5rem
      display flex
      flex-wrap wrap
      align-items flex-start
      align-content stretch
      justify-content space-between

    .feature
      flex-grow 1
      flex-basis 30%
      max-width 30%

      h2
        font-size 1.4rem
        font-weight 500
        border-bottom none
        padding-bottom 0
        color lighten($textColor, 10%)

      p
        color lighten($textColor, 25%)

    .footer
      padding 2.5rem
      border-top 1px solid $borderColor
      text-align center
      color lighten($textColor, 25%)

  @media (max-width: $MQMobile)
    .home
      .features
        flex-direction column

      .feature
        max-width 100%
        padding 0 2.5rem

  @media (max-width: $MQMobileNarrow)
    .home
      padding-left 1.5rem
      padding-right 1.5rem

      .hero
        img
          max-height 210px
          margin 2rem auto 1.2rem

        h1
          font-size 2rem

        h1, .description, .action
          margin 1.2rem auto

        .description
          font-size 1.2rem

        .action-button
          font-size 1rem
          padding 0.6rem 1.2rem

      .feature
        h2
          font-size 1.25rem
</style>
