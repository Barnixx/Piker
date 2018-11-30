export interface CategoryModel {

  id: number;
  categoryName: string;
  categoryDescription: string;
  subcategories?: Array<CategoryModel>;
  attributeGroups?: Array<string>;
  parentId?: number;

}
