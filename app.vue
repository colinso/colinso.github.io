<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

useHead({
  title: `${portfolioData.name} - ${portfolioData.title}`,
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: portfolioData.bio },
    { name: 'author', content: portfolioData.name },
    { property: 'og:title', content: `${portfolioData.name} - ${portfolioData.title}` },
    { property: 'og:description', content: portfolioData.bio },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `${portfolioData.name} - ${portfolioData.title}` },
    { name: 'twitter:description', content: portfolioData.bio }
  ],
})
</script>