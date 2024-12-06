import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Certifique-se de que a chave está definida
});

export const gerarCenarioIA = async (descricao) => {
  try {
    // Geração do texto com OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'Você é um assistente criativo que ajuda a gerar histórias interativas curtas.',
        },
        {
          role: 'user',
          content: `Crie uma história em etapas curtas baseada na descrição: "${descricao}". 
          Cada etapa deve ter uma frase curta e duas opções: uma correta e outra incorreta. 
          Formate assim:
          [
            {
              "etapa": 1,
              "texto": "Frase da etapa 1",
              "opcoes": {
                "correta": "Opção correta 1",
                "incorreta": "Opção incorreta 1"
              }
            }
          ]`,
        },
      ],
    });

    const historiaGerada = JSON.parse(completion.choices[0].message.content.trim());

    // Geração da imagem
    const imageResponse = await openai.images.generate({
      prompt: descricao,
      n: 1,
      size: '256x256',
    });

    const imagemGerada = imageResponse.data[0].url;

    return { etapas: historiaGerada, imagem: imagemGerada };
  } catch (error) {
    console.error('Erro ao chamar a API:', error.response ? error.response.data : error.message);
    throw error;
  }
};
