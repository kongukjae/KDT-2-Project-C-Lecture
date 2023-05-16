module.exports = (title, components) => {
  const content = components.map(component => component()).join('');

  return `
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;
}