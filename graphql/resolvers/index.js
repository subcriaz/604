const bcrypt = require('bcryptjs');
const User = require('../../models/user');
const Att = require('../../models/att');
const Trans = require('../../models/trans');
/* helper function*/
const user = async userId => {
  try {
    const enduser = await User.findById(userId);
    return {
      ...user._doc,
      _id: user.id
      
    };
  } catch (err) {
    throw new Error('4-User find by id  :  ' + err);
  }
};


module.exports = {

getAllUsers :  async () => {
  
    try {
      const allusers = await User.find();
    return allusers.map(user => {
        return {
        ...user._doc,
        _id: user.id
        
      };  
    });

    }catch (err) {
      throw ' error in getallendusers()  '+err;
    }
},

//(usermobileno: UserMobileNo) :User

getUserByMobileNo :  async args => {
  try {
    const existingUser = await User.findOne( {usermobileno : args.usermobileno });
    if (!existingUser) {
      throw new Error('1-User does not exist with mobile no : ' + args.usermobileno  );
      
    }
    return existingUser; 
    //.map(user => {
      //return {
      //...user._doc,
      //_id: user.id
     
    //};  
  //}

  }catch (err) {
    throw ' error in getuserbymob()  '+err;
  }
},
 
  
  
  createUser: async args => {
    try {
      const existingUser = await User.findOne({ usermobileno: args.userInput.usermobileno });
      if (existingUser) {
        throw new Error('1-User exists already. '  + args.userInput.usermobileno);
        
      }
      
      const hashedPassword = await bcrypt.hash(args.userInput.userpw, 12);

      const user = new User({
        usermobileno: args.userInput.usermobileno,
        userlabel : args.userInput.userlabel,
        username : args.userInput.username,
        userpw: hashedPassword,
        ismanager     : args.userInput.ismanager,
        usermanagerid : args.userInput.usermanagerid,
        userststus    : args.userInput.userststus,
        usercreatedon : args.userInput.usercreatedon,
        usercreatedby : args.userInput.usercreatedby



      });

      const result = await user.save();

      return { ...result._doc, userpw: null, _id: result.id };
    } catch (err) {
      throw new Error('2- User Save error :  '  +err);
    }
  }
  
, createAtt: async args => {
    try {
      
      const att = new Att({
        attuserid  		: args.attInput.attuserid,
        attdate 		: args.attInput.attdate,
        atttime 		: args.attInput.atttime,
		atttype 		: args.attInput.atttype,
        attsms 	  		: args.attInput.attsms,
		attsmssent 		: args.attInput.attsmssent,
        attcreatedon 	: args.attInput.attcreatedon,
        attcreatedby 	: args.attInput.attcreatedby
      });

      const result = await att.save();

      return { ...result._doc,  _id: result.id };
    } catch (err) {
      throw new Error('2- Attendance Save error :  '  +err);
    }
  }

, getAttByAttUserId :  async args => {
  try {
    const existingAtt = await Att.findOne( {attuserid : args.attuserid });
    if (!existingAtt) {
      throw new Error('1-Attendance does not exist with attuserid  : ' + args.attuserid  );
      
    }
    return existingAtt; 
    //.map(user => {
      //return {
      //...user._doc,
      //_id: user.id
     
    //};  
  //}

  }catch (err) {  throw ' error in getAttByAttUserId ()  '+err; }
}
  
  //////////////////////////////////////////////////////
  // Trans
  //////////////////////////////////////////////////////
  ,   createTrans: async args => {
    try {
      
      const trans = new Trans({
        trans_userid  		: args.transInput.trans_userid,
        trans_date 			: args.transInput.trans_date,
        trans_time 			: args.transInput.trans_time,
		trans_type 			: args.transInput.trans_type,
		trans_amount 		: args.transInput.trans_amount,
        trans_sms 	  		: args.transInput.trans_sms,
		trans_sms_sent 		: args.transInput.trans_sms_sent,
        trans_createdon 	: args.transInput.trans_createdon,
        trans_createdby 	: args.transInput.trans_createdby
      });

      const result = await trans.save();

      return { ...result._doc,  _id: result.id };
    } catch (err) {
      throw new Error('2_ ATransaction Save error :  '  +err);
    }
  }

, getTransByTransUserId :  async args => {
  try {
    const existingTrans = await Trans.findOne( {trans_userid : args.trans_userid });
    if (!existingTrans) {
      throw new Error('1_Transaction does not exist with attuserid  : ' + args.trans_userid  );     
      
    }
    return existingTrans; 
    //.map(user => {
      //return {
      //...user._doc,
      //_id: user.id
     
    //};  
  //}

  }catch (err) { throw ' error in getTransByTransUserId ()  '+err; }
}
  
  
  
  
};
