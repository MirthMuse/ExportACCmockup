import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv, Plugin} from 'vite';
import fs from 'fs';

function injectMenuPlugin(): Plugin {
  return {
    name: 'inject-menu',
    transformIndexHtml(html) {
      const menuData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'src/data/menu.json'), 'utf-8'));
      
      let menuHtml = '<div id="seo-menu-data" style="display: none;">\n';
      menuHtml += '<h1>Our Menu</h1>\n';
      
      for (const category of menuData.categories) {
        menuHtml += `<h2>${category.category}</h2>\n<ul>\n`;
        for (const item of category.items) {
          menuHtml += `<li><strong>${item.name}</strong> - ${item.description} ($${item.price})</li>\n`;
        }
        menuHtml += '</ul>\n';
      }
      menuHtml += '</div>';

      return html.replace('</body>', `${menuHtml}\n  </body>`);
    }
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      injectMenuPlugin()
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
