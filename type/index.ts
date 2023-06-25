import { addHelp } from "../utils/api"

interface login{
	username:string|number,
	password:string|number
}

interface regester{
	username:string|number,
	password:string|number,
	phonenumber:number|null,
	userid:string
}

interface usermsg{
	username:string|null,
	phonenumber:string|null,
	id:string|null
}

interface addhelp{
	type:null|string,
	money:null|string,
	content:string,
	username:string|null,
	fileList:Array<any>,
	fileList1:Array<any>
}


interface addappraise{
	helpid:string,
	content:string,
	username:string
}
export {login,regester,usermsg,addhelp,addAppraise}
