const { buildSchema } = require('graphql');

module.exports = buildSchema(`

type Trans {
  _id: ID!
  trans_userid  	: String!
  trans_date     	: String!
  trans_time      	: String!
  trans_type        : String!
  trans_amount      : String!
  trans_sms     	: String!
  trans_sms_sent 	: String!
  trans_createdon 	: String!
  trans_createdby 	: String!
  }

input TransInput {
  trans_userid  	: String!
  trans_date     	: String!
  trans_time      	: String!
  trans_type        : String!
  trans_amount      : String!
  trans_sms     	: String!
  trans_sms_sent 	: String!
  trans_createdon 	: String!
  trans_createdby 	: String!
  }



type Att {
  _id: ID!
  attuserid  	: String!
  attdate     	: String!
  atttime      	: String!
  atttype       : String!
  attsms     	: String!
  attsmssent 	: String!
  attcreatedon 	: String!
  attcreatedby 	: String!
  }

input AttInput {
  attuserid  	: String!
  attdate     	: String!
  atttime      	: String!
  atttype       : String!
  attsms     	: String!
  attsmssent 	: String!
  attcreatedon 	: String!
  attcreatedby 	: String!
  }
  
  
type User {
  _id: ID!
  usermobileno  : String! 
  userlabel     : String!
  username      : String!
  userpw        : String
  ismanager     : String!
  usermanagerid : String!
  userststus    : String!
  usercreatedon : String!
  usercreatedby : String!
  }



input UserInput {
  usermobileno  : String!
  userlabel     : String!
  username      : String!
  userpw        : String! 
  ismanager     : String!
  usermanagerid : String!
  userststus    : String!
  usercreatedon : String!
  usercreatedby : String!
  
}



type RootQuery {
	
  getTransByTransUserId (trans_userid:String ) : Trans

  getAttByAttUserId (attuserid:String ) : Att
  
  getAllUsers 		:[User]!
  
  getUserByMobileNo(usermobileno : String ) :User
}

type RootMutation {
	
	createTrans (transInput: TransInput ) : Trans
	
	createAtt (attInput: AttInput ) : Att
	
    createUser(userInput: UserInput): User
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
