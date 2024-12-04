export interface TigetFormData {
  /** ニックネーム */
  nickname: string;
  /** 電話番号 */
  phone: [string, string, string];
  /** 郵便番号 */
  postalCode: string;
  /** 住所 */
  address: string;
  /** お名前 */
  fullName: [string, string];
  /** 備考 */
  note: string;
  /** 同意事項 */
  agreeCheck: boolean;
}
