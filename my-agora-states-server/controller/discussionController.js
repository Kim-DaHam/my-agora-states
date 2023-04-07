const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    return res.json(discussionsData);
  },

  findById: (req, res) => {
    let filteredDiscussion = discussionsData.filter((discussion) =>{
        return discussion.id === Number(req.params.id);
    })
    if(filteredDiscussion.length > 0)
      return res.status(200).json(...filteredDiscussion);
    else
      return res.status(404).send('존재하지 않습니다.');
  },

  findByCategory: (req, res) => {
    const { category } = req.params;

    let filteredDiscussions = [];

    if(category === 'recent'){
      for(let i=0; i<8; i++){
        filteredDiscussions.push(discussionsData[i]);
      }
    }
    if(category === 'hotTopic'){

    }

    return res.status(200).json(filteredDiscussions);
  }

};

module.exports = {
  discussionsController,
};
