const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "byteBank",
    projectName: "bytebank-footer",
    webpackConfigEnv,
    argv,
  });

  // A função merge combina a configuração padrão com as suas customizações.
  return merge(defaultConfig, {
    // Suas customizações vão aqui
    
    devServer: {
      port: 8081, // Porta que definimos no nosso import-map
    },

    // --- INÍCIO DA CORREÇÃO ---
    // Adicione este objeto 'module' para incluir a nova regra para SCSS.
    module: {
      rules: [
        {
          // Esta regra diz ao Webpack o que fazer com arquivos .scss
          test: /\.scss$/,
          use: [
            // Os loaders são aplicados de baixo para cima
            'style-loader', // 3. Pega o CSS final e injeta na página
            'css-loader',   // 2. Resolve os imports e urls do CSS
            'sass-loader'   // 1. Converte o SCSS em CSS
          ]
        }
      ]
    }
    // --- FIM DA CORREÇÃO ---
  });
};