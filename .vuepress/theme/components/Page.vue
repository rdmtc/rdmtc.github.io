<script>
  import DefaultPage from '@vuepress/theme-default/components/Page';
  import { normalize, endingSlashRE } from '@vuepress/theme-default/util'

  export default {
    extends: DefaultPage,

    computed: {
      editLink() {
        if (this.$page.frontmatter.editLink === false) {
          return
        }

        const {
          repo,
          editLinks,
          docsDir = '',
          docsBranch = 'master',
          docsRepo = repo
        } = this.$site.themeConfig;

        let path = normalize(this.$page.path);

        if (this.$page.path.startsWith('/wiki/')) {
          if (endingSlashRE.test(path)) {
            path += 'README'
          }
          return `https://github.com/HM-RedMatic/RedMatic${path}/_edit`;
        }

        if (endingSlashRE.test(path)) {
          path += 'README.md'
        } else {
          path += '.md'
        }

        if (docsRepo && editLinks) {
          return this.createEditLink(repo, docsRepo, docsDir, docsBranch, path)
        }
      }
    }
  }
</script>