const schema = require('./Schema')

module.exports = (schemaName) =>{
     if(!schema.hasOwnProperty(schemaName))
     throw new Error(`'${schemaName}' validator is not exist`)

     return async (req,res,next) =>{
        try{
            const validated = schema[schemaName].validate(req.body)
            if(validated.error) return res.json({flag:false,message:validated.error.details})
            next()
        }
        catch(e){
            res.json({flag:false,message:e.message})
        }
     }
}