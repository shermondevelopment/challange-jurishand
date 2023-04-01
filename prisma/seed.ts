import prisma from '../app/settings/prisma'

const main = async () => {
  await prisma.article.create({
    data: {
      title: 'Código Civil',
      author: 'Fernando Henrique Cardoso',
      content: 'Lei de Introdução...',
      date: new Date(),
      category: 'Civil'
    }
  })
}

main()
  .catch(() => console.log('erro to execute seed'))
  .finally(async () => await prisma.$disconnect())
