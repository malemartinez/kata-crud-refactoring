function reducerList(state, action) {
  switch (action.type) {
    case 'update-item':
      const listCategoryUpItem = state.listCategory;
      const listUpdateEdit = listCategoryUpItem.list.map((item) => {
        if (item.id === action.item.id) {
          return action.item;
        }
        return item;
      });
      listCategoryUpItem.list = listUpdateEdit;
      listCategoryUpItem.item = {};
      return { ...state, listCategory: listCategoryUpItem }
    case 'delete-item':
      const listCategoryUpDelete = state.listCategory;
      const listUpdate = listCategoryUpDelete.list.filter((item) => {
        return item.id !== action.id;
      });
      listCategoryUpDelete.list = listUpdate;
      return { ...state, listCategory: listCategoryUpDelete }
    case 'update-list':
      const listCategoryUpList = state.listCategory;
      listCategoryUpList.list = action.list;
      return { ...state, listCategory: listCategoryUpList }
    case 'edit-item':
      const listCategoryUpEdit = state.listCategory;
      listCategoryUpEdit.item = action.item;
      return { ...state, listCategory: listCategoryUpEdit }
    case 'add-item':
      const listCategoryUp = state.listCategory.list;
      listCategoryUp.push(action.item);
      return { ...state, listCategory: {list: listCategoryUp, item: {}} }
    default:
      return state;
  }
}

export { reducerList };