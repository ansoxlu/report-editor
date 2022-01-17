import { TypePolicies } from '@apollo/client'
import metadata from './metadata.json'

const TYPE_POLICIES:TypePolicies = {
  Query: {
    fields: {
      findMetadataAll: {
        read () {
          console.log(metadata)
          return metadata.map(it => ({
            ...it,
            // @ts-ignore
            items: TYPE_POLICIES.Metadata.fields.items!.read(),
            // @ts-ignore
            examples: TYPE_POLICIES.Metadata.fields.examples!.read()
          }))
        }
      }
    }
  },
  Metadata: {
    fields: {
      items: {
        read () {
          console.log(metadata)
          return []
        }
      },
      examples: {
        read () {
          return []
        }
      }
    }
  }
}

export default TYPE_POLICIES
