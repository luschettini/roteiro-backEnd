const Post = require('../models/Post');
const PostList = require('../models/PostList');
const lista = new PostList();

lista.addPost(new Post("", 250, 40, "Mandem Oi para o novo integrante", "https://www.cachorro.com"));
lista.addPost(new Post("", 300, 60, "Linda vista de Manhatan", "https://www.manhatan.com"));

const router = {
  getAllPosts: (req, res) => {
    res.json(lista.getAllPosts());
  },

  getPostById: (req, res) => {
    try {
      res.json(lista.getPostById(req.params.id));
    } catch (error) {
      res.status(404).json({ message: "Esse post não existe em nossa rede", error });
    }
  },

  addPost: (req, res) => {
    try {
      const { idUser, like, comment, description, image } = req.body;
      if (!idUser || !like || !comment || !description || !image) {
        throw new Error("É necessário preencher todos os campos para criar um post");
      }
      const newPost = new Post(idUser, like, comment, description, image);
      lista.addPost(newPost);
      res.status(201).json(newPost);
    } catch (error) {
      res.status(400).json({ message: error.message, error });
    }
  },

  updatePost: (req, res) => {
    try {
      res.json(lista.updatePost(req.params.id, req.body));
    } catch (error) {
      res.status(404).json({ message: "Erro ao atualizar o post", error });
    }
  },

  deletePost: (req, res) => {
    lista.deletePost(req.params.id);
    res.status(200).json({ message: "Seu post foi deletado com sucesso", IdDeletado: req.params.id });
  }
};

module.exports = router;