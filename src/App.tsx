import * as React from 'react';
import {useState,useRef} from 'react';

export const App =()=>{
	const [first, setFirst] = useState(Math.ceil(Math.random()*9));
	const [second, setSecond] = useState(Math.ceil(Math.random()*9));
	const [value,setValue] = useState('');
	const [result,setResult] = useState('');
	const inputEl=useRef<HTMLInputElement>(null);

	const onSubmitForm=(e:React.FormEvent<HTMLFormElement>)=>{
		e.preventDefault();
		const input=inputEl.current;
		if(parseInt(value)===first*second){
			setResult('correct');
			setFirst(Math.ceil(Math.random()*9));
			setSecond(Math.ceil(Math.random()*9));
			setValue('');
			if(input){
				input.focus();
			}
		}else{
			setResult('🧐 consider again');
			setValue('');
			if(input){input.focus();}
		}



	}

	return(
		<>
			<div>
				{first} * {second} =
			</div>
			<form
			onSubmit={onSubmitForm}
			>
			<input
			ref={inputEl}
			type="number"
			value={value}
			onChange={(e)=>setValue(e.target.value)}
			 />
</form>
{result}
			</>

	)
}