/**
 * Action types
 */
export enum ModalTypes {
  OPEN_ADD_CONTACT = '@modal/OPEN_ADD_CONTACT',
}

/**
 * State type
 */
export interface IModalState {
  readonly addContact: boolean;
}
