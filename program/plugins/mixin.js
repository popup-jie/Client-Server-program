/* 目前nuxt 版本并不支持此方法来写入相关的mixin方法 */
import Vue from 'vue'
import { mapState } from 'vuex'

Vue.mixin({
  computed: mapState([
    'counter'
  ]),
})
