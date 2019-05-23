<template>
  <vk-offcanvas-content>
    <vk-sticky :media="960">
      <layout/>
    </vk-sticky>

    <router-view/>

    <!-- <vk-offcanvas
      :show.sync="offcanvas"
      :overlay="true"
      transition="push"
    >
      <div class="uk-panel">
        <vk-nav v-for="(pages, category, index) in navigation"
          :key="index"
          :class="['tm-nav', { 'uk-margin-top': index }]"
        >
          <vk-nav-item-header :title="category" />
          <router-link v-for="(page, title) in pages"
            exact
            :key="page"
            :to="page"
            tag="li"
            @click.native="offcanvas = false"
          >
            <a>{{ title }}</a>
          </router-link>
        </vk-nav>
      </div>
    </vk-offcanvas> -->
  </vk-offcanvas-content>
</template>

<script>
import layout from '@/components/layout'
export default {
  inject: ['navigation'],
  components: { layout },
  data: () => ({
    offcanvas: false
  })
}
</script>