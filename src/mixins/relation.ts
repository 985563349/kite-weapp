type TrivialInstance = WechatMiniprogram.Component.TrivialInstance;

type RelationOptions = WechatMiniprogram.Component.RelationOption &
  ThisType<TrivialInstance> & {
    path: string;
    effect?: () => void;
  };

function relation(options: RelationOptions) {
  const { path, type, linked, linkChanged, unlinked, effect } = options;

  return Behavior({
    lifetimes: {
      created() {
        const property = ['parent', 'ancestor'].includes(type) ? 'parent' : 'children';

        Object.defineProperty(this, property, {
          get() {
            const nodes = this.getRelationNodes(path);

            return property === 'parent' ? nodes[0] : nodes;
          },
        });
      },
    },

    definitionFilter(defFields) {
      const { relations } = defFields;

      defFields.relations = {
        [path]: {
          type,
          linked(this: TrivialInstance, target) {
            linked?.call(this, target);
            effect?.call(this);
          },
          linkChanged(this: TrivialInstance, target) {
            linkChanged?.call(this, target);
            effect?.call(this);
          },
          unlinked(this: TrivialInstance, target) {
            unlinked?.call(this, target);
            effect?.call(this);
          },
        },
        ...relations,
      };
    },
  });
}

export default relation;
