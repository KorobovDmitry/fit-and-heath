<template>
  <div class="index-page">

    <div class="index-page__content">
      <app-block-title>Авторизация</app-block-title>
      <nuxt-link to="/auth">Войти / Зарегистрировать</nuxt-link>
      <br>
    </div>

  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'

export default {
  layout: 'empty',
  name: 'index',
  head () {
    return {
      title: 'Fit and Health - Профиль',
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { // МИКРОРАЗМЕТКА
          innerHTML: `{
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://website.com",
            "name": "Website",
            "description": "This website is awesome.",
            "publisher": {
              "@type": "Organization",
              "name": "Website",
              "alternateName": "SiteWeb",
              "logo": {
                "@type": "ImageObject",
                "url": "https://someimage.com/image"
              }
            }
          }`,
          type: 'application/ld+json'
        }
      ]
    }
  },
  // middleware: ['userAuth'],
  components: {
    AppBlockTitle
  }
  // async fetch ({ store }) {
  //   await store.dispatch('userProfile/getUserInfo')
  // }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.index-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-left: 80px;
  padding: 40px;
  .index-page__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1700px;
  }
}

</style>
