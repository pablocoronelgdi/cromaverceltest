import { addons } from '@storybook/manager-api'

const STATIC_FILTER = 'static-filter'
const excludeTags = new Set(['docs-only', 'test-only'])
addons.register(STATIC_FILTER, (api) => {
  api.experimental_setFilter(STATIC_FILTER, (item) => {
    const tags = item.tags || []
    // very strange behavior here. Auto-generated docs entries get
    // the tags of the primary story by default, so if that story
    // happens to be `docs-only`, then filtering it out of the sidebar
    // ALSO filter out the sidebar entry, which is not what we want.
    // Here we special case it, but there should be a better solution.
    return (
      tags.includes('docs') ||
      tags.filter((tag) => excludeTags.has(tag)).length === 0
    )
  })
})
