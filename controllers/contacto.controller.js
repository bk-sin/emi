const { Query } = require('firefose')
const Contacts = require('../models/Contacts.js')

const contactController = {
    getContacts:async (req,res)=>{
        try{
            const query = new Query
            const contacts= await Contacts.find(query)
                if(contacts.length){
                    return res.status(200).json({success:true, response:contacts})
                }else{
                    return res.status(404).json({success:false, response:"Nadie se quiere comunicar con vos :("})
                }
        }catch(error){
            return res.status(500).json({success:false, response:"Internal Server Error"})
        }
    }, 
    createContact:async(req,res)=>{
        try{
            const {nombre, asunto, email, mensaje} = req.body
            if(nombre && asunto && email && mensaje){
                const newContact = await Contacts.create(req.body)
                return res.status(200).json({success:true, response:"Mensaje enviado, pronto me contactaré con vos"})
            }else{
                return res.status(400).json({success:false, response:"Completar todos los campos, por favor."})
            }
        }catch(error){
            console.log(error)
            return res.status(500).json({success:false, response:"Internal Server Error"})
        }
    },
}

module.exports = contactController 
