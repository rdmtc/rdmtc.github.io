<script>
  import DefaultLayout from '@vuepress/theme-default/layouts/Layout';
  import Page from './components/Page';
  import Navbar from './components/Navbar';

  export default {
    extends: DefaultLayout,
    components: { Page, Navbar },
  }
</script>