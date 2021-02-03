import { GoogleSpreadsheet } from 'google-spreadsheet'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY
    })
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]  //acessa a planilha loginClientes
    const data = JSON.parse(req.body)

    //NOME	EMAIL	WHATSAPP	SENHA
    //adiciona dados na linha dentro da sheet indexada acima
    await sheet.addRow({
      NOME: data.NOME,
      EMAIL: data.EMAIL,
      WHATSAPP: data.WHATSAPP,
      SENHA: data.SENHA
    })

  } catch (err) {
    console.log(err)
    res.end('error')
  }
}