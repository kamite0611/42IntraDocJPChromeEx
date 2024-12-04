import { Box, Link, Stack } from '@mui/material';
import { useEffect, useState } from 'react';

import { TigetFormField } from './TigetFormField';
import { getTigetFormData, saveTigetFormData } from '../../repository';
import { TigetFormData } from '../../type';
import { TigetFormDataDefault } from '../../value';

export function TigetForm() {
  const [formData, setFormData] = useState(TigetFormDataDefault);

  /** フィールド変更時 */
  const handleChange = async (keyName: keyof TigetFormData, newValue: ValueOf<TigetFormData>) => {
    const newFormData: TigetFormData = {
      ...formData,
      [keyName]: newValue,
    };

    setFormData(newFormData);
    await saveTigetFormData(newFormData);
  };

  /**
   * chrome.storageに保存している初期値を取得
   */
  useEffect(() => {
    (async () => {
      const newFormData = await getTigetFormData();

      setFormData(newFormData);
    })();
  }, []);

  const { nickname, phone, postalCode, address, fullName, note, agreeCheck } = formData;

  return (
    <Stack gap={2}>
      <TigetFormField
        type="string"
        label="ニックネーム"
        required
        keyname="nickname"
        value={nickname}
        onChange={handleChange}
      />
      <TigetFormField
        type="phone"
        label="電話番号"
        required
        keyname="phone"
        value={phone}
        onChange={handleChange}
      />
      <TigetFormField
        type="string"
        label="郵便番号"
        required
        keyname="postalCode"
        value={postalCode}
        onChange={handleChange}
        inputProps={{ sx: { width: '150px' }, placeholder: '例）1234567' }}
      />
      <TigetFormField
        type="string"
        label="住所"
        required
        keyname="address"
        value={address}
        onChange={handleChange}
        inputProps={{
          placeholder: '例）東京都世田谷区三軒茶屋O-OO-OO',
        }}
      />
      <TigetFormField
        type="name"
        label="お名前"
        required
        keyname="fullName"
        value={fullName}
        onChange={handleChange}
      />
      <TigetFormField
        type="string"
        label="備考"
        keyname="note"
        value={note}
        onChange={handleChange}
        inputProps={{
          multiline: true,
          rows: 2,
        }}
      />

      <TigetFormField
        type="checkbox"
        label="同意事項"
        required
        keyname="agreeCheck"
        value={agreeCheck}
        onChange={handleChange}
        desc={
          <Box sx={{ fontSize: '13px', lineHeight: '17px' }}>
            TIGETの
            <Link href="https://tiget.net/user_policy" target="_blank">
              利用規約・特約
            </Link>
            と
            <Link href="https://tiget.net/privacy_policy" target="_blank">
              プライバシーポリシー
            </Link>
            に同意する
          </Box>
        }
      />

      <Stack sx={{ fontSize: '11px' }}>
        入力した情報は全てご自身のPC内のストレージに保存されます。
        <br />
        拡張機能が削除されない限り、入力した情報がなくなることはありません。
      </Stack>
    </Stack>
  );
}
