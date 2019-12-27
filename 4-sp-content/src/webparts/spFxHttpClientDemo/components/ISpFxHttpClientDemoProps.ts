import { ButtonClickedCallback, ICountryListItem } from "../../../models";

export interface ISpFxHttpClientDemoProps {
  description: string;
  spListItems: ICountryListItem[];
  onGetListItems?: ButtonClickedCallback;
  onAddListItem?: ButtonClickedCallback;
  onUpdateListItem?: ButtonClickedCallback;
  onDeleteListItem?: ButtonClickedCallback;
}
