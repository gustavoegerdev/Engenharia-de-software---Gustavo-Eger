// Google API import
const { google } = require('googleapis');

// Authentication settings here
const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: 'stunts-gustavo-eger@stunts-gustavo-eger.iam.gserviceaccount.com',
      private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDjTb8oMUho/iM7\noOZ5FZCtllg5bj0TkKOgepG4IsSVgTLqcDl7zkeSur4lPWVPgXo2CUd6OZr5OBCJ\nEt/S4NMNvkvUbZ+YNhb8t8x7iQEKrb7+KFARKnFBYfQnAYhkKS4m65ShVFxy5EZ6\n3vuc5LvCm/qOQ5rI6Dyqt2I/pgbpmUG1EOro8uDeIDp8NHnXC9oKqzYPnYJUGiVP\nGVdrkPXrBMKEJlBfitD6Cm+70xWSCC5shWQ+Y480exZq8QGvjyY8FtSDuL4ayYLL\nXOktvtG20CYK51ZSHQi36BDzBnPGN+xnjFQ81DYLP2jKwSXLTTULBD01h77GKorQ\nfOPFXxp9AgMBAAECggEAIoITosj0msf2Vl+jjb9p4wifpTxotlcvmDXzeHaCzMW8\nEp5uA68563tBUcsD3fGkuZ5oBRTIw8wwqna8lzm9oOkCfyITaBrSG5TVzO1sRJBD\nHjfFjA2a+xehZuiTKc2crZj3TBTQIjsovg+rOFL7dFyUydNWpOipCSvlFQ+iHgV2\nhkr9Kr/WqacwYDsLjmqhHhpvxrvSLq0+6l6cWRlADoMHPVzs1Wa2ox861/Rg9cOA\nPn6HX930qssLoBlEJRNibBlkrOgX8LmhD29PDHzVAJD+QrCrRSuHUmpAcovgxvqI\nIV4SMudPcG/kltkY2T9i5RzeKi5oTRk3t9PkD5GsCwKBgQD7r/nTNumIsdE5siNA\nwRZaVcWwQZLuIS4Fce6nr36w1nRPV6DzOqgbjeEPWlks0Q6z/U4q5GAbCHv8QCzY\nrcJyeGURuIa18tSC60YIVdeWL028f1Mmh9A64wnhrlWAPCRjSW7aDkqIhCUotwym\n7NKpbYUBJb3ligMSuoR2kjt9/wKBgQDnMs/cOjmT1AHdLmChjODCeEaDx9nMDwSh\nPnNx86H0Zbom0rgfuy+QIZY6VZVQU3TADAHGAco3d/IfoYaLKG6vYL3l/Ay26yEy\nOikOkhnbQCJ7kHgnqelEmjOmcRRwzyqFwzF3vPPobhjsrhe+ZnfdpGypz7tgPWOD\nvYVdetRfgwKBgDP+t8q1pmsx6PpVXckL2rVQ0OVHtrXxLtO7JMWJkM+xjheyD7MP\n5BjFJ8CHNrL2gWYXp2VfBqevCgYjr+AXjXseeiq+Bz5haxucxTwFl+MT5KhTWXc1\nSYRQ0QLJhCpYwl+slPUBTM6FFjQiFMALXr3XvUluZZuc9mORGrpwHVA7AoGBAMr+\nfC77GG7JaNGQ1NtDXFyjShaOtJZMYV5J/QcCSSLS5r0LqwqBSeOc+dBCMJWUkR/F\n6xC1pZ1KPVa0dfNdDsIBiPqTcX5xuHXnRwE6GmW9TAl98WGx99R6J/ttserSmp1T\nou1lBCsB7/Rvbv2H7pq2sYnvkK+RdvzGvIA1Rp6NAoGBAMBhnCEW8hA68ezOQU16\nGWFTDuC4jGjbFFM37KyKx117IYB7h0Qj1AIYX6NEE6+23l5mJrT7mM8Ba1EkS03m\nd8S2tU6QA4pk6d+6aNaeIhBg5gRveDNgk5J/Y3KNcUhqao6czPCy96AwidtaFuRv\nPDYxdNGNrgQ8ULx42FoQEM6r\n-----END PRIVATE KEY-----\n',
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  
});

const sheets = google.sheets({ version: 'v4', auth });

const spreadsheetId = '1N-xFc7S6MpsdKBeuNdo9qt2-K-HvtX5JYbxAYPlxKk8';
const range = 'B4:H27';


// Main fuction
async function main() {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values;

    
    if (rows.length) {
      const updatedRows = [];

      rows.forEach((row, index) => {
        const nomeAluno = row[0];
        const faltas = parseInt(row[1]);
        const P1 = parseInt(row[2]);
        const P2 = parseInt(row[3]);
        const P3 = parseInt(row[4]);

        const aulasTotais = 60;
        const limiteFaltas = aulasTotais * 0.25;

        const m = (P1 + P2 + P3) / 3;

        let situacao;
        let notaFinal = 0;

        if (faltas > limiteFaltas) {
          situacao = 'Reprovado por Falta';
        } else if (m < 5) {
          situacao = 'Reprovado por Nota';
        } else if (m < 7) {
          situacao = 'Exame Final';
          const naf = Math.ceil((10 - m) * 2);
          notaFinal = m < 5 ? 5 : naf;
        } else {
          situacao = 'Aprovado';
        }

        updatedRows.push([
          nomeAluno,
          faltas,
          P1,
          P2,
          P3,
          situacao,
          situacao === 'Exame Final' ? notaFinal : 0
        ]);
      });

      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: 'B4:H27',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: updatedRows,
        },
      });

      console.log('Situações e notas atualizadas com sucesso na planilha.');
    } else {
      console.log('Não foram encontrados dados na planilha.');
    }
  } catch (error) {
    console.error('Erro ao acessar a planilha:', error);
  }
}

main();