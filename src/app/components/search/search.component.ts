import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Vacancy } from 'src/app/models/vacancy';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	form: FormGroup;
	levels = [
		"Beginner",
		"Expert",
	];
	//@Output() autoSearch: EventEmitter<string> = new EventEmitter<string>();
	@Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
	searchText: string = '';
	vacancy: Vacancy;
    types: Array<string> = ['Permanent', 'Temporary', 'Contract', 'Full-Time', 'Part-Time', 'Work From Home']; 
    selectedTypeValues: Array<string> = []; 

	constructor(
		private fb: FormBuilder,
		private dataService: DataService
	) { }

	ngOnInit(): void {
		this.buildForm();
	}

	// maybe use a formArray for checkboxes 
	buildForm(): void {
		this.form = this.fb.group({
			search: new FormControl(''),
			salaryFrom: new FormControl(''),
			salaryTo: new FormControl(''),
			title: new FormControl(''),
			location: new FormControl(''),
			specialism: new FormControl(''),
			type: new FormControl('')
			//type: this.addTypeControls()
			//type: this.fb.array([]),
		});
	}

	search(filters: any): void {		
        this.emitFilters(filters); 
	}

	resetForm(form: any): void {
		form.reset();
		var filtersObject = form.value; 
		this.emitFilters(filtersObject); 
	}

	private emitFilters(filters: any): void {
		Object.keys(filters).forEach(key => filters[key] === '' || filters[key] === null  ? delete filters[key] : key);
		this.groupFilters.emit(filters);
	}
	
// may be needed for checkboxes
	// addTypeControls() {
	// 	const array = this.types.map(type => {
	// 		return this.fb.control(false);
	// 	});
	// 	console.log("Array", array);
	// 	return this.fb.array(array);
	// }

	// get typesArray() {
	// 	return <FormArray>this.form.get('type')
	// }

	// getSelectedTypesValues(event: Event) {
	// 		console.log("Event details", event.target);
		
		
	// 	this.selectedTypeValues = []; 
	// 	this.typesArray.controls.forEach((control, i) => {
	// 		if (control.value) {
	// 			console.log("this.typesArray", this.typesArray); 
	// 			this.selectedTypeValues.push(this.types[i]); 
	// 		}
	// 	}); 
	// }
}
